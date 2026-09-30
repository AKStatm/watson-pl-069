import { NICHES } from "../src/config/niches";
import { getNicheImages } from "../src/config/images";
import type { NicheId } from "../src/config/types";

async function check(url: string) {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    const type = res.headers.get("content-type") || "";
    return {
      url,
      status: res.status,
      type,
      ok: res.ok && type.includes("image"),
    };
  } catch (e) {
    return { url, status: 0, type: "", ok: false, err: String(e) };
  }
}

async function main() {
  const ids = Object.keys(NICHES) as NicheId[];
  const all = new Set<string>();
  for (const id of ids) {
    for (const u of getNicheImages(id, NICHES[id].family)) all.add(u);
  }
  const list = [...all];
  console.log("unique urls", list.length);

  const results: Awaited<ReturnType<typeof check>>[] = [];
  for (let i = 0; i < list.length; i += 12) {
    const batch = await Promise.all(list.slice(i, i + 12).map(check));
    results.push(...batch);
    console.log(`checked ${Math.min(i + 12, list.length)}/${list.length}`);
  }

  const bad = results.filter((r) => !r.ok);
  console.log("ok", results.length - bad.length, "bad", bad.length);
  for (const b of bad) {
    console.log(b.status, b.type, b.url.split("?")[0]);
  }

  const elec = getNicheImages("electrician", "home-services");
  console.log("\nelectrician set:");
  for (const u of elec) {
    const r = results.find((x) => x.url === u) || (await check(u));
    console.log(r.ok ? "OK" : "BAD", u.split("?")[0]);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
