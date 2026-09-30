import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import type { SiteModel } from "@/config/site";
import { getNavLinks, withNiche } from "@/config/nav";

export function Footer({ site }: { site: SiteModel }) {
  const links = getNavLinks(site.niche.family, site.niche.id);

  return (
    <footer className="border-t border-black/5 bg-[var(--ink)] text-white">
      <div className="container-pad grid gap-8 py-10 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
            {site.niche.label} · {site.lead.cityArea}
          </div>
          <div className="font-display mt-2 text-2xl font-bold">{site.lead.businessName}</div>
          <p className="mt-3 max-w-lg text-sm text-white/70">{site.display.about}</p>
          {site.display.hasWhatsApp ? (
            <a href={site.display.whatsappLink} className="btn-primary mt-5 !bg-[#25d366] !shadow-none">
              <FaWhatsapp /> Chat now
            </a>
          ) : (
            <Link href={withNiche("/contact", site)} className="btn-primary mt-5">
              Contact
            </Link>
          )}
        </div>
        <div className="grid gap-2 text-sm text-white/75">
          {links.map((l) => (
            <Link key={l.href} href={withNiche(l.href, site)} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-white/75">
          <div className="font-semibold text-white">Visit</div>
          <p className="mt-2">{site.lead.address}</p>
          {site.display.hasPhone ? <p className="mt-2">{site.display.phoneDisplay}</p> : null}
          {site.display.hasEmail ? <p className="mt-1">{site.lead.email}</p> : null}
          <p className="mt-2">{site.display.hours}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.lead.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
