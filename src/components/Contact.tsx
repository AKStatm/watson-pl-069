import { FiMail, FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import type { SiteModel } from "@/config/site";
import { MapEmbed } from "./MapEmbed";

export function Contact({ site }: { site: SiteModel }) {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-pad grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">Contact</div>
          <h2 className="font-display mt-2 text-3xl font-bold">Visit or message us</h2>
          <div className="mt-6 space-y-4">
            {site.lead.address ? (
              <div className="flex gap-3">
                <FiMapPin className="mt-1 text-[var(--primary)]" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-[var(--muted)]">{site.lead.address}</div>
                </div>
              </div>
            ) : null}
            {site.display.hasPhone ? (
              <div className="flex gap-3">
                <FiPhone className="mt-1 text-[var(--primary)]" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a className="text-sm text-[var(--primary)]" href={`tel:${site.lead.phone || site.lead.whatsapp}`}>
                    {site.display.phoneDisplay}
                  </a>
                </div>
              </div>
            ) : null}
            {site.display.hasEmail ? (
              <div className="flex gap-3">
                <FiMail className="mt-1 text-[var(--primary)]" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a className="text-sm text-[var(--primary)]" href={`mailto:${site.lead.email}`}>
                    {site.lead.email}
                  </a>
                </div>
              </div>
            ) : null}
            <div className="rounded-2xl bg-[var(--soft)] p-4 text-sm">
              <div className="font-semibold">Hours</div>
              <div className="mt-1 text-[var(--muted)]">{site.display.hours}</div>
              {site.lead.ownerName ? (
                <div className="mt-2 text-[var(--muted)]">Owner: {site.lead.ownerName}</div>
              ) : null}
              {site.lead.urduSupport ? (
                <div className="mt-2 text-[var(--muted)]">Urdu & English on WhatsApp.</div>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {site.display.hasWhatsApp ? (
                <a href={site.display.whatsappLink} className="btn-primary">
                  <FaWhatsapp /> WhatsApp
                </a>
              ) : null}
              <a href={site.display.mapsLink} target="_blank" rel="noreferrer" className="btn-secondary">
                <FiNavigation /> Open in Maps
              </a>
            </div>
          </div>
        </div>
        <MapEmbed site={site} className="min-h-[320px]" />
      </div>
    </section>
  );
}
