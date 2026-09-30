"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiAlertTriangle, FiPhoneCall } from "react-icons/fi";
import type { SiteModel } from "@/config/site";

export function EmergencyBand({ site }: { site: SiteModel }) {
  if (!site.niche.specialSections.includes("emergency")) return null;

  return (
    <section className="container-pad py-4 sm:py-6">
      <div
        className="overflow-hidden rounded-[24px] px-5 py-6 text-white sm:px-8"
        style={{ background: "linear-gradient(120deg, #7f1d1d, #b91c1c 45%, #ea580c)" }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <FiAlertTriangle className="text-xl" />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                Emergency support
              </div>
              <h3 className="font-display mt-1 text-xl font-bold sm:text-2xl">Need help right now?</h3>
              <p className="mt-1 max-w-xl text-sm text-white/90">
                Message your location and issue — {site.lead.businessName} prioritizes urgent jobs in{" "}
                {site.lead.cityArea}.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            {site.display.hasPhone ? (
            <a
              href={`tel:${site.lead.phone || site.lead.whatsapp}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-[#7f1d1d]"
            >
              <FiPhoneCall /> Call now
            </a>
            ) : null}
            <a
              href={site.display.whatsappLink}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black/25 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/30"
            >
              <FaWhatsapp /> WhatsApp SOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
