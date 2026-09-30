import type { SiteModel } from "@/config/site";
import { imageAt } from "@/config/images";
import { SafeImage } from "./SafeImage";

export function Gallery({ site }: { site: SiteModel }) {
  const labels = site.niche.galleryLabels;
  const variant = site.layout.galleryVariant;

  return (
    <section className="section bg-white" id="gallery">
      <div className="container-pad">
        <div className="mb-8 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Gallery
          </div>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            {site.niche.label} visuals
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Photos matched to this niche — the site never looks empty.
          </p>
        </div>

        {variant === "film" ? (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {labels.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="relative h-64 w-[70vw] shrink-0 overflow-hidden rounded-[24px] sm:h-80 sm:w-[340px]"
              >
                <SafeImage src={imageAt(site.images, index)} alt={label} fill className="object-cover" sizes="340px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">{label}</div>
              </div>
            ))}
          </div>
        ) : variant === "editorial" ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {labels.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className={`relative overflow-hidden rounded-[22px] ${
                  index === 0
                    ? "col-span-2 min-h-[240px] md:col-span-3 md:row-span-2 md:min-h-[420px]"
                    : index === 1
                      ? "min-h-[180px] md:col-span-3"
                      : "min-h-[140px] md:col-span-2"
                }`}
              >
                <SafeImage src={imageAt(site.images, index)} alt={label} fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-3 left-3 text-sm font-semibold text-white">{label}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {labels.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className={`relative overflow-hidden rounded-[22px] bg-[var(--soft)] ${
                  index === 0
                    ? "col-span-2 row-span-2 min-h-[220px] md:min-h-[340px]"
                    : "min-h-[140px] md:min-h-[160px]"
                }`}
              >
                <SafeImage
                  src={imageAt(site.images, index)}
                  alt={label}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="rounded-2xl bg-black/40 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
