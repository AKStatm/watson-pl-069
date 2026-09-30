import { NICHES } from "../src/config/niches";
import { getNicheImages } from "../src/config/images";
import type { NicheId } from "../src/config/types";
import { writeFileSync } from "fs";

async function isGood(url: string) {
  try {
    const probe = url.includes("?")
      ? url.replace(/w=\d+/, "w=200").replace(/q=\d+/, "q=40")
      : `${url}?auto=format&fit=crop&w=200&q=40`;
    const r = await fetch(probe, { redirect: "follow" });
    if (!r.ok) return false;
    const type = r.headers.get("content-type") || "";
    return type.includes("image");
  } catch {
    return false;
  }
}

async function main() {
  const ids = Object.keys(NICHES) as NicheId[];
  const all = new Set<string>();
  for (const id of ids) {
    for (const u of getNicheImages(id, NICHES[id].family)) all.add(u);
  }
  const good: string[] = [];
  const bad: string[] = [];
  const list = [...all];
  for (let i = 0; i < list.length; i += 15) {
    const batch = list.slice(i, i + 15);
    const results = await Promise.all(
      batch.map(async (u) => ((await isGood(u)) ? { u, ok: true } : { u, ok: false }))
    );
    for (const r of results) (r.ok ? good : bad).push(r.u);
    console.log(`checked ${Math.min(i + 15, list.length)}/${list.length}`);
  }
  writeFileSync(
    "scripts/image-audit.json",
    JSON.stringify(
      {
        good: good.map((u) => u.split("?")[0].replace("https://images.unsplash.com/", "")),
        bad: bad.map((u) => u.split("?")[0].replace("https://images.unsplash.com/", "")),
      },
      null,
      2
    )
  );
  console.log("good", good.length, "bad", bad.length);
}

main();
