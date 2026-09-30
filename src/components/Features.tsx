import { FiCheckCircle } from "react-icons/fi";
import type { SiteModel } from "@/config/site";

export function Features({ site }: { site: SiteModel }) {
  return (
    <section id="features" className="section bg-white">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Why customers choose us
          </div>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            Built for real {site.niche.label.toLowerCase()} needs in Pakistan
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Built for <strong>{site.lead.businessName}</strong> in {site.lead.cityArea} — easy
            booking, clear services, and a site that looks ready to send to customers.
          </p>
          {site.lead.yearsExperience ? (
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-[var(--soft)] px-4 py-3">
              <span className="font-display text-3xl font-bold text-[var(--primary)]">
                {site.lead.yearsExperience}+
              </span>
              <span className="text-sm font-medium">years serving local customers</span>
            </div>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.niche.features.map((feature) => (
            <div key={feature.title} className="card-surface p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--primary)]">
                <FiCheckCircle className="text-xl" />
              </div>
              <h3 className="font-display text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
