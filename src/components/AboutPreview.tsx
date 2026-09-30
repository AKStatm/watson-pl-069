import { SafeImage } from "./SafeImage";
import { imageAt } from "@/config/images";
import type { SiteModel } from "@/config/site";
import { FiCheckCircle, FiMapPin } from "react-icons/fi";

export function AboutPreview({ site, full = false }: { site: SiteModel; full?: boolean }) {
  const points = site.niche.trustPoints.slice(0, 4);

  return (
    <section id="about" className="section">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 h-52 overflow-hidden rounded-[28px] sm:h-64">
            <SafeImage src={imageAt(site.images, 0)} alt={site.lead.businessName} fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative h-36 overflow-hidden rounded-[22px] sm:h-44">
            <SafeImage src={imageAt(site.images, 2)} alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative h-36 overflow-hidden rounded-[22px] sm:h-44">
            <SafeImage src={imageAt(site.images, 3)} alt="" fill className="object-cover" sizes="25vw" />
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">About</div>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">{site.lead.businessName}</h2>
          <p className="mt-3 text-[var(--muted)]">{site.display.about}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium">
            <FiMapPin className="text-[var(--primary)]" />
            {site.lead.address}
          </p>
          {full ? (
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              This live demo is built so a {site.niche.label.toLowerCase()} business can send one link
              to a customer: services, photos, packages, reviews, map, and WhatsApp booking — even when
              the lead sheet only has a name and address.
            </p>
          ) : null}
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <FiCheckCircle className="mt-0.5 shrink-0 text-[var(--primary)]" />
                {p}
              </li>
            ))}
          </ul>
          {site.lead.yearsExperience ? (
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-[var(--soft)] px-4 py-3">
              <span className="font-display text-3xl font-bold text-[var(--primary)]">
                {site.lead.yearsExperience}+
              </span>
              <span className="text-sm font-medium">years serving {site.lead.cityArea}</span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
