"use client";

import { Tag } from "antd";
import { FiArrowUpRight } from "react-icons/fi";
import type { SiteModel } from "@/config/site";
import { imageAt } from "@/config/images";
import { SafeImage } from "./SafeImage";

export function Services({ site }: { site: SiteModel }) {
  const variant = site.layout.servicesVariant;
  if (variant === "menu") return <MenuServices site={site} />;
  if (variant === "shop") return <ShopServices site={site} />;
  if (variant === "list") return <ListServices site={site} />;
  return <CardServices site={site} />;
}

function Heading({ site }: { site: SiteModel }) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          What we offer
        </div>
        <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">{site.niche.servicesTitle}</h2>
        <p className="mt-2 text-[var(--muted)]">
          Clear options for customers in {site.lead.cityArea}. Every item can be booked on WhatsApp.
        </p>
      </div>
    </div>
  );
}

function CardServices({ site }: { site: SiteModel }) {
  return (
    <section id="services" className="section">
      <div className="container-pad">
        <Heading site={site} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {site.niche.services.map((service, index) => (
            <article
              key={service.title}
              className="card-surface group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
            >
              <div className="relative h-40 w-full bg-[var(--soft)]">
                <SafeImage
                  src={imageAt(site.images, index + 1)}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                {service.popular ? (
                  <Tag color="gold" className="!absolute !left-3 !top-3 !m-0 !rounded-full !border-0 !px-2.5 !text-[11px] !font-semibold">
                    Popular
                  </Tag>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-display text-lg font-bold leading-snug">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wide text-[var(--muted)]">From</div>
                    <div className="font-semibold text-[var(--primary)]">{service.priceFrom || "Ask quote"}</div>
                  </div>
                  <a
                    href={site.display.whatsappLink || "#book"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--primary)]"
                    aria-label={`Book ${service.title}`}
                  >
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuServices({ site }: { site: SiteModel }) {
  return (
    <section id="services" className="section bg-white">
      <div className="container-pad">
        <Heading site={site} />
        <div className="grid gap-5 lg:grid-cols-2">
          {site.niche.services.map((service, index) => (
            <article key={service.title} className="flex gap-4 overflow-hidden rounded-[22px] border border-black/5 bg-[var(--surface)] p-3">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-36">
                <SafeImage src={imageAt(site.images, index)} alt={service.title} fill className="object-cover" sizes="144px" />
              </div>
              <div className="min-w-0 flex-1 py-1 pr-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <div className="shrink-0 font-semibold text-[var(--primary)]">{service.priceFrom || "Ask"}</div>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">{service.description}</p>
                <a href={site.display.whatsappLink || "#book"} className="mt-3 inline-flex text-sm font-semibold text-[var(--primary)]">
                  Order this →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopServices({ site }: { site: SiteModel }) {
  return (
    <section id="services" className="section">
      <div className="container-pad">
        <Heading site={site} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {site.niche.services.map((service, index) => (
            <article key={service.title} className="group overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative aspect-[3/4]">
                <SafeImage src={imageAt(site.images, index)} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="25vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <div className="text-sm font-bold">{service.title}</div>
                  <div className="text-xs text-white/80">{service.priceFrom || "In store"}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListServices({ site }: { site: SiteModel }) {
  return (
    <section id="services" className="section bg-white">
      <div className="container-pad">
        <Heading site={site} />
        <div className="space-y-4">
          {site.niche.services.map((service, index) => (
            <article key={service.title} className="card-surface grid overflow-hidden md:grid-cols-[220px_1fr_auto]">
              <div className="relative min-h-[140px]">
                <SafeImage src={imageAt(site.images, index)} alt={service.title} fill className="object-cover" sizes="220px" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{service.description}</p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 p-5 md:items-end">
                <div className="font-display text-xl font-bold text-[var(--primary)]">{service.priceFrom || "Consult"}</div>
                <a href="#book" className="btn-primary !min-h-10">
                  Book
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
