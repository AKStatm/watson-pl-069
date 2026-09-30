import { writeFileSync, readFileSync } from "fs";
import type { NicheId, NicheFamily } from "../src/config/types";

const audit = JSON.parse(readFileSync("scripts/image-audit.json", "utf8")) as {
  good: string[];
};

const q = "?auto=format&fit=crop&w=1200&q=80";
const u = (id: string) => `https://images.unsplash.com/${id}${q}`;

const good = audit.good;

function pick(seed: number, count: number, exclude: Set<string> = new Set()) {
  const out: string[] = [];
  let i = seed;
  let guard = 0;
  while (out.length < count && guard < good.length * 2) {
    const id = good[i % good.length];
    i += 17;
    guard++;
    if (exclude.has(id) || out.includes(id)) continue;
    out.push(id);
  }
  // pad if needed
  while (out.length < count) {
    const id = good[(seed + out.length * 3) % good.length];
    if (!out.includes(id)) out.push(id);
    else out.push(good[(out.length * 11) % good.length]);
  }
  return out.map(u);
}

const families: NicheFamily[] = [
  "home-services",
  "beauty",
  "health",
  "food",
  "auto",
  "education",
  "professional",
  "retail",
];

/** Hand-picked verified sets for key niches (all IDs from good list) */
const curated: Partial<Record<NicheId, string[]>> = {
  plumber: [
    "photo-1607472586893-edb57bdc0e39",
    "photo-1581578731548-c64695cc6952",
    "photo-1621905252507-b35492cc74b4",
    "photo-1558618666-fcd25c85cd64",
    "photo-1504328345606-18bbc8c9d7d1",
    "photo-1584622650111-993a426fbf0a",
  ].map(u),
  electrician: [
    "photo-1621905251189-08b45d6a269e",
    "photo-1504328345606-18bbc8c9d7d1",
    "photo-1473341304170-971dccb5ac1e",
    "photo-1558618666-fcd25c85cd64",
    "photo-1621905252507-b35492cc74b4",
    "photo-1581092918056-0c4c3acd3789",
  ].map(u),
  "ac-hvac": [
    "photo-1581092918056-0c4c3acd3789",
    "photo-1621905252507-b35492cc74b4",
    "photo-1504328345606-18bbc8c9d7d1",
    "photo-1581578731548-c64695cc6952",
    "photo-1558618666-fcd25c85cd64",
    "photo-1607472586893-edb57bdc0e39",
  ].map(u),
  salon: [
    "photo-1560066984-138dadb4c035",
    "photo-1522337660859-02fbefca4702",
    "photo-1562322140-8baeececf3df",
    "photo-1516975080664-ed2fc6a32937",
    "photo-1487412947147-5cebf100ffc2",
    "photo-1604654894610-df63bc536371",
  ].map(u),
  restaurant: [
    "photo-1517248135467-4c7edcad34c4",
    "photo-1414235077428-338989a2e8c0",
    "photo-1559339352-11d035aa65de",
    "photo-1552566626-52f8b828add9",
    "photo-1555396273-367ea4eb4db5",
    "photo-1504674900247-0877df9cc836",
  ].map(u),
  dentist: [
    "photo-1606811841689-23dfddce3e95",
    "photo-1588776814546-1ffcf47267a5",
    "photo-1598256989800-fe5f95da9787",
    "photo-1629909613654-28e377c37b09",
    "photo-1609840114035-3c981b782dfe",
    "photo-1588776814546-daab30f310ce",
  ].map(u),
};

const familySeeds: Record<NicheFamily, number> = {
  "home-services": 0,
  beauty: 40,
  health: 80,
  food: 120,
  auto: 160,
  education: 200,
  professional: 220,
  retail: 240,
};

const familyImages: Record<string, string[]> = {};
for (const f of families) {
  familyImages[f] = pick(familySeeds[f], 6);
}

// All niche ids from types — read from existing niches via requiring after we write? 
// Hardcode from audit usage: read niches from a simple list
const nicheIds = JSON.parse(
  readFileSync("scripts/niche-ids.json", "utf8")
) as NicheId[];

const nicheImages: Record<string, string[]> = {};
nicheIds.forEach((id, idx) => {
  if (curated[id]) {
    nicheImages[id] = curated[id]!;
  } else {
    nicheImages[id] = pick(idx * 13 + 3, 6);
  }
});

function fmtArr(arr: string[], indent = 4) {
  const pad = " ".repeat(indent);
  return `[\n${arr.map((x) => `${pad}\`${x}\`,`).join("\n")}\n${" ".repeat(indent - 2)}]`;
}

const out = `import type { NicheFamily, NicheId } from "./types";

/** Curated Unsplash images — every URL verified HTTP 200 */
const FAMILY_IMAGES: Record<NicheFamily, string[]> = {
  "home-services": ${fmtArr(familyImages["home-services"])},
  beauty: ${fmtArr(familyImages.beauty)},
  health: ${fmtArr(familyImages.health)},
  food: ${fmtArr(familyImages.food)},
  auto: ${fmtArr(familyImages.auto)},
  education: ${fmtArr(familyImages.education)},
  professional: ${fmtArr(familyImages.professional)},
  retail: ${fmtArr(familyImages.retail)},
};

/** Unique photo sets for every niche */
const NICHE_IMAGES: Record<NicheId, string[]> = {
${nicheIds
  .map((id) => {
    const key = id.includes("-") ? `"${id}"` : id;
    return `  ${key}: ${fmtArr(nicheImages[id])},`;
  })
  .join("\n")}
};

export function getNicheImages(nicheId: NicheId, family: NicheFamily): string[] {
  const specific = NICHE_IMAGES[nicheId] || [];
  const familyImgs = FAMILY_IMAGES[family];
  const merged = [...specific, ...familyImgs];
  return Array.from(new Set(merged)).slice(0, 8);
}

export function imageAt(images: string[], index: number) {
  return images[index % images.length];
}
`;

writeFileSync("src/config/images.ts", out);
console.log("wrote clean images.ts with", nicheIds.length, "niches");
