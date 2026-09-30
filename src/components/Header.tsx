"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Drawer } from "antd";
import type { SiteModel } from "@/config/site";
import { getNavLinks, withNiche } from "@/config/nav";

export function Header({ site }: { site: SiteModel }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const links = getNavLinks(site.niche.family, site.niche.id);
  const dark = site.layout.headerTone === "dark" && !scrolled && pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all ${
          dark
            ? "border-white/10 bg-black/25 text-white backdrop-blur-md"
            : "border-black/5 bg-white/95 text-[var(--ink)] shadow-sm backdrop-blur-md"
        }`}
      >
        <div className="container-pad flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-3.5">
          <Link href={withNiche("/", site)} className="min-w-0 flex-1">
            <div
              className={`truncate text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] ${
                dark ? "text-white/65" : "text-[var(--muted)]"
              }`}
            >
              {site.niche.label} · {site.lead.cityArea.split(",")[0]}
            </div>
            <div className="font-display truncate text-base font-bold sm:text-xl">{site.lead.businessName}</div>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {links.map((l) => {
              const href = withNiche(l.href, site);
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={href}
                  className={`text-sm font-medium transition ${
                    active
                      ? dark
                        ? "text-white"
                        : "text-[var(--primary)]"
                      : dark
                        ? "text-white/75 hover:text-white"
                        : "text-[var(--muted)] hover:text-[var(--primary)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {site.display.hasPhone ? (
              <a
                href={`tel:${site.lead.phone || site.lead.whatsapp}`}
                className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold md:inline-flex ${
                  dark ? "border border-white/25 bg-white/10 text-white" : "border border-black/10 bg-white text-[var(--ink)]"
                }`}
              >
                <FiPhone /> {site.display.phoneDisplay}
              </a>
            ) : null}
            {site.display.hasWhatsApp ? (
              <a
                href={site.display.whatsappLink}
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#25d366] px-3.5 py-2 text-sm font-bold text-white"
              >
                <FaWhatsapp className="text-base" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            ) : (
              <Link href={withNiche("/contact", site)} className="btn-primary !min-h-10 !px-4 !py-2">
                Contact
              </Link>
            )}
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full xl:hidden ${
                dark ? "border border-white/25 bg-white/10 text-white" : "border border-black/10 bg-white text-[var(--ink)]"
              }`}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        title={site.lead.businessName}
        width={300}
      >
        <div className="flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={withNiche(l.href, site)}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium hover:bg-[var(--soft)]"
            >
              {l.label}
            </Link>
          ))}
          {site.display.hasWhatsApp ? (
            <a href={site.display.whatsappLink} className="btn-primary mt-2">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          ) : null}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 text-sm text-[var(--muted)]"
            onClick={() => setOpen(false)}
          >
            <FiX /> Close
          </button>
        </div>
      </Drawer>
    </>
  );
}
