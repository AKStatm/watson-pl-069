"use client";

import { SafeImage } from "./SafeImage";
import { FiCheck } from "react-icons/fi";
import type { SiteModel } from "@/config/site";
import { imageAt } from "@/config/images";

export function Packages({ site }: { site: SiteModel }) {
  const packages = site.niche.packages;

  return (
    <section id="packages" className="section">
      <div className="container-pad">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Packages
          </div>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            Packages that help close the deal
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Starter → Standard → Premium → Monthly. Customers understand value before they WhatsApp you.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className={`card-surface relative flex h-full flex-col overflow-hidden ${
                pkg.highlighted ? "ring-2 ring-[var(--primary)] shadow-[var(--shadow)]" : ""
              }`}
            >
              <div className="relative h-28 w-full">
                <SafeImage
                  src={imageAt(site.images, index + 2)}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {pkg.highlighted ? (
                  <div className="absolute right-3 top-3 rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Best value
                  </div>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="font-display text-2xl font-extrabold text-[var(--primary)] sm:text-3xl">
                    {pkg.price}
                  </span>
                  {pkg.period ? (
                    <span className="pb-1 text-sm text-[var(--muted)]">{pkg.period}</span>
                  ) : null}
                </div>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FiCheck className="mt-0.5 shrink-0 text-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={site.display.whatsappLink} className="btn-primary mt-5 w-full !min-h-11">
                  Choose {pkg.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
