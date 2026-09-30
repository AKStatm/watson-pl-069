import type { SiteModel } from "@/config/site";
import { imageAt } from "@/config/images";
import { SafeImage } from "./SafeImage";
import { withNiche } from "@/config/nav";

export function PageHero({
  site,
  kicker,
  title,
  subtitle,
}: {
  site: SiteModel;
  kicker: string;
  title: string;
  subtitle: string;
}) {
  const dark = site.layout.headerTone === "dark";

  return (
    <section className={`relative overflow-hidden ${dark ? "text-white" : "text-slate-900"}`}>
      {dark ? (
        <>
          <div className="absolute inset-0">
            <SafeImage
              src={imageAt(site.images, 0)}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
        </>
      ) : (
        <>
          <div className="absolute inset-0" style={{ background: "var(--soft)" }} />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-50 blur-3xl" style={{ background: "var(--accent)" }} />
        </>
      )}
      <div className="container-pad relative py-12 sm:py-16">
        <div className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-white/70" : "text-[var(--primary)]"}`}>
          {kicker}
        </div>
        <h1 className="font-display mt-2 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className={`mt-3 max-w-2xl text-sm sm:text-base ${dark ? "text-white/85" : "text-[var(--muted)]"}`}>
          {subtitle}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={withNiche("/contact", site)} className={dark ? "btn-on-dark" : "btn-primary"}>
            {site.niche.ctaPrimary}
          </a>
          {site.display.hasWhatsApp ? (
            <a href={site.display.whatsappLink} className={dark ? "btn-on-dark-ghost" : "btn-secondary"}>
              WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({ site }: { site: SiteModel }) {
  return (
    <section className="container-pad py-10">
      <div
        className="overflow-hidden rounded-[28px] px-6 py-10 text-white sm:px-10"
        style={{ background: "var(--gradient)" }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Ready when you are</div>
            <h2 className="font-display mt-2 text-2xl font-bold sm:text-3xl">
              {site.lead.businessName} · {site.lead.cityArea}
            </h2>
            <p className="mt-2 text-sm text-white/90">{site.niche.heroSubtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={withNiche("/contact", site)} className="btn-on-dark">
              {site.niche.bookingLabel}
            </a>
            {site.display.hasWhatsApp ? (
              <a href={site.display.whatsappLink} className="btn-on-dark-ghost">
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
