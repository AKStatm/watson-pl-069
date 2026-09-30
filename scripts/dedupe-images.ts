import { readFileSync, writeFileSync } from "fs";

const audit = JSON.parse(readFileSync("scripts/image-audit.json", "utf8")) as {
  good: string[];
};
const good = audit.good;
const q = "?auto=format&fit=crop&w=1200&q=80";
const prefix = "https://images.unsplash.com/";

let src = readFileSync("src/config/images.ts", "utf8");

// Within each string array literal, replace duplicate photo IDs with next unused good IDs
const arrayRegex = /:\s*\[((?:\s*`[^`]+`,?\s*)+)\]/g;

src = src.replace(arrayRegex, (full, body: string) => {
  const urls = [...body.matchAll(/`(https:\/\/images\.unsplash\.com\/[^`]+)`/g)].map((m) => m[1]);
  if (urls.length === 0) return full;

  const seen = new Set<string>();
  const fixed: string[] = [];
  let gi = 0;

  for (const url of urls) {
    const id = url.replace(prefix, "").split("?")[0];
    if (!seen.has(id)) {
      seen.add(id);
      fixed.push(`${prefix}${id}${q}`);
      continue;
    }
    // find a good unused replacement
    let pick = good[(gi++ * 11) % good.length];
    let guard = 0;
    while (seen.has(pick) && guard < good.length) {
      pick = good[(gi++ * 11) % good.length];
      guard++;
    }
    seen.add(pick);
    fixed.push(`${prefix}${pick}${q}`);
  }

  const rebuilt = fixed.map((u) => `    \`${u}\`,`).join("\n");
  return `: [\n${rebuilt}\n  ]`;
});

writeFileSync("src/config/images.ts", src);
console.log("deduped image arrays");
