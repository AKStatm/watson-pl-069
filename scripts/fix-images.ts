import { readFileSync, writeFileSync } from "fs";

const q = "?auto=format&fit=crop&w=1200&q=80";
const base = "https://images.unsplash.com/";

const audit = JSON.parse(readFileSync("scripts/image-audit.json", "utf8")) as {
  good: string[];
  bad: string[];
};

// Curated working replacements (must be in good list / verified)
const replacements: Record<string, string> = {
  "photo-1558449028-b53a126dcc0b": "photo-1621905251189-08b45d6a269e", // electrician
  "photo-1631545806609-35a985adb0c3": "photo-1581092918056-0c4c3acd3789", // ac
  "photo-1562259949-e8e7449bc404": "photo-1497366216548-37526070297c", // painter
  "photo-1600607687644-c7171b42498b": "photo-1600210492486-724fe5c67fb0", // interior
  "photo-1595476108010-b4d1f595b71b": "photo-1562322140-8baeececf3df", // salon
  "photo-1622286342621-4bd786c9447a": "photo-1599351431202-1e0f0137899a", // barber
  "photo-1493256338651-d82f595177c1": "photo-1503951914875-452162b0f3f1", // barber
  "photo-1519823551278-64ac927534fb": "photo-1540555700478-4be289fbecef", // spa
  "photo-1607779097040-26e80aa78e22": "photo-1604654894610-df63bc536371", // nail
  "photo-1610992015732-2449b7634380": "photo-1632345031435-8727f6897d53", // nail
  "photo-1522335789203-aabdacdda6de": "photo-1487412947147-5cebf100ffc2", // makeup
  "photo-1562962230-16e4623fe69a": "photo-1611501275019-9b5cda994e8d", // tattoo
  "photo-1590246814883-57c511da0d1d": "photo-1611532736597-de2d4265fba3", // tattoo
  "photo-1598371839696-5c5bb00b74eb": "photo-1549633030-89d0743bad01", // tattoo
  "photo-1571902943202-507c50664b98": "photo-1534438327276-14e5300c3a48", // gym
  "photo-1576678927484-e15f0212a404": "photo-1517836357463-d25dfeac3438", // gym
  "photo-1581093458791-9f3c3900df4b": "photo-1579154204601-01588f351e67", // lab
  "photo-1591076482161-42ce6ad51976": "photo-1574258495973-f010dfbb5371", // optician
  "photo-1498804103079-a6351b05e8ea": "photo-1495474472287-4d71bcdd2085", // cafe
  "photo-1464347744102-11db628ceb27": "photo-1509440159596-0249088772ff", // bakery
  "photo-1601362840469-51e4d8da4244": "photo-1607860108855-64acf2078ed9", // car wash
  "photo-1486262715619-67b69e4bd6bb": "photo-1619642751034-765dfdf7c58e", // auto/mechanic
  "photo-1544620341-b388bbf02d0e": "photo-1449965408869-eaa3f722e40d", // taxi
  "photo-1511527661048-7c90466ea681": "photo-1492144534655-ae79c964c9d7", // taxi
  "photo-1514320291840-b5e2aacfabb9": "photo-1511379938547-c1f69419868d", // music
  "photo-1516280440612-4801683942e0": "photo-1507838153414-b4b713384a76", // music
  "photo-1461896836934-ffe607ba6851": "photo-1574629810360-7efbbe195018", // sports
  "photo-1517649763962-0c623066027b": "photo-1552674605-db6ffd4facb5", // sports
  "photo-1456513080800-7d93dbe9ed91": "photo-1434030216411-0b793f4b4173", // language
  "photo-1600047509807-ba8f99d2cdbc": "photo-1560518883-ce09059eeffa", // real estate
  "photo-1476514525535-07fb361186d1": "photo-1488646953014-85cb44e25828", // travel
  "photo-1530789256257-4821c0198d0e": "photo-1469854523086-cc02fe5d8800", // travel
  "photo-1483985988104-cb9c66fe667f": "photo-1445205170230-053b83016050", // boutique
  "photo-1455659817273-f9680774153e": "photo-1490750967868-88aa4486c946", // florist
};

// Fallback pool of known-good photos if a replacement is also bad
const fallbackPool = audit.good.filter((id) => !audit.bad.includes(id));

let src = readFileSync("src/config/images.ts", "utf8");
let replaced = 0;

for (const badId of audit.bad) {
  let next = replacements[badId];
  if (!next || audit.bad.includes(next)) {
    // pick a stable fallback from good list
    next = fallbackPool[(replaced * 7) % fallbackPool.length];
  }
  const from = `${base}${badId}`;
  const to = `${base}${next}`;
  if (!src.includes(from)) {
    console.log("not found in file:", badId);
    continue;
  }
  src = src.split(from).join(to);
  replaced++;
  console.log("fixed", badId, "->", next);
}

writeFileSync("src/config/images.ts", src);
console.log("replaced occurrences for", replaced, "bad ids");
console.log("suffix still", q);
