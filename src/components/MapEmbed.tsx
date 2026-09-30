import type { SiteModel } from "@/config/site";

export function MapEmbed({ site, className = "" }: { site: SiteModel; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[22px] border border-black/5 bg-slate-100 ${className}`}>
      <iframe
        title={`${site.lead.businessName} map`}
        src={site.display.mapsEmbed}
        className="h-full min-h-[280px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
