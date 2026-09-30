import Link from "next/link";
import { notFound } from "next/navigation";
import { listNiches } from "@/config/niches";
import { getNicheTheme } from "@/config/niche-themes";
import { getNicheImages } from "@/config/images";
import { SafeImage } from "@/components/SafeImage";
import { showNichePreview } from "@/lib/resolve-site";

export const metadata = {
  title: "All niche templates",
};

export default function NichesPage() {
  if (!showNichePreview()) notFound();

  const niches = listNiches();
  const byFamily = niches.reduce<Record<string, typeof niches>>((acc, niche) => {
    acc[niche.family] = acc[niche.family] || [];
    acc[niche.family].push(niche);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#0b0f14] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-amber-300">
          ← Back to live demo
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold">All niche templates</h1>
        <p className="mt-2 max-w-2xl text-white/65">
          {niches.length} complete demo websites — different layouts, correct photos, services,
          packages, gallery, about, contact and WhatsApp booking. Open any niche to preview.
        </p>

        <div className="mt-10 space-y-12">
          {Object.entries(byFamily).map(([family, items]) => (
            <section key={family}>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">
                {family.replace("-", " ")}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((niche) => {
                  const theme = getNicheTheme(niche.id, niche.family);
                  const images = getNicheImages(niche.id, niche.family);
                  return (
                    <Link
                      key={niche.id}
                      href={`/?niche=${niche.id}`}
                      className="group overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:ring-white/25"
                    >
                      <div className="relative h-36">
                        <SafeImage src={images[0]} alt={niche.label} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div
                          className="absolute left-3 top-3 h-1.5 w-12 rounded-full"
                          style={{ background: theme.gradient }}
                        />
                      </div>
                      <div className="p-4">
                        <div className="font-semibold">{niche.label}</div>
                        <div className="mt-1 text-sm text-white/55">{niche.tagline}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
