"use client";

import { SafeImage } from "./SafeImage";
import {
  FiCheckCircle,
  FiClipboard,
  FiPackage,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import type { SiteModel } from "@/config/site";
import { imageAt } from "@/config/images";

export function MenuHighlights({ site, force = false }: { site: SiteModel; force?: boolean }) {
  const show =
    force ||
    site.niche.specialSections.includes("menu") ||
    site.niche.specialSections.includes("menu-cards");
  if (!show) return null;

  return (
    <section className="section">
      <div className="container-pad">
        <div className="mb-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Highlights
          </div>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">Customer favourites</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.niche.services.map((item, index) => (
            <div key={item.title} className="card-surface overflow-hidden">
              <div className="relative h-36 w-full">
                <SafeImage
                  src={imageAt(site.images, index)}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.description}</p>
                <div className="mt-3 font-semibold text-[var(--primary)]">{item.priceFrom || "Ask"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClassesBand({ site }: { site: SiteModel }) {
  if (!site.niche.specialSections.includes("classes")) return null;

  return (
    <section className="container-pad pb-2 pt-6">
      <div className="card-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SafeImage src={imageAt(site.images, 2)} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Batches & classes
            </div>
            <h3 className="font-display mt-1 text-2xl font-bold">Upcoming seats open — reserve your spot</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Message preferred timing. {site.lead.businessName} will confirm batch availability.
            </p>
          </div>
          <a href="#book" className="btn-primary whitespace-nowrap">
            Reserve a seat
          </a>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter({ site }: { site: SiteModel }) {
  if (!site.niche.specialSections.includes("before-after")) return null;

  const pairs = [
    { before: 0, after: 1, label: site.niche.galleryLabels[0] || "Project 1" },
    { before: 2, after: 3, label: site.niche.galleryLabels[1] || "Project 2" },
  ];

  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="mb-8 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Transformations
          </div>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">Before & after</h2>
          <p className="mt-2 text-[var(--muted)]">
            See the difference {site.lead.businessName} delivers for clients in {site.lead.cityArea}.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pairs.map((pair) => (
            <div key={pair.label} className="card-surface overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative min-h-[160px] sm:min-h-[200px]">
                  <SafeImage
                    src={imageAt(site.images, pair.before)}
                    alt={`${pair.label} before`}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Before
                  </span>
                </div>
                <div className="relative min-h-[160px] sm:min-h-[200px]">
                  <SafeImage
                    src={imageAt(site.images, pair.after)}
                    alt={`${pair.label} after`}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-[var(--primary)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    After
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold">{pair.label}</h3>
                <a href="#book" className="mt-2 inline-flex text-sm font-semibold text-[var(--primary)]">
                  Book a similar job →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio({ site }: { site: SiteModel }) {
  if (!site.niche.specialSections.includes("portfolio")) return null;

  const items = site.niche.galleryLabels.slice(0, 6);

  return (
    <section className="section">
      <div className="container-pad">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Portfolio
            </div>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              Featured {site.niche.label.toLowerCase()} work
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Recent projects and looks from {site.lead.businessName}.
            </p>
          </div>
          <a href={site.display.whatsappLink} className="btn-primary w-full sm:w-auto">
            Request your project
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {items.map((label, index) => (
            <div
              key={`${label}-${index}`}
              className="group relative min-h-[140px] overflow-hidden rounded-[20px] sm:min-h-[180px]"
            >
              <SafeImage
                src={imageAt(site.images, index)}
                alt={label}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <div className="text-sm font-semibold text-white">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Consultation({ site }: { site: SiteModel }) {
  if (!site.niche.specialSections.includes("consultation")) return null;

  const steps = [
    { icon: FiClipboard, title: "Share your need", text: "Tell us the goal, timeline, and budget on WhatsApp." },
    { icon: FiCheckCircle, title: "Free consult", text: `${site.lead.businessName} reviews options and recommends a plan.` },
    { icon: FiPackage, title: "Confirm & start", text: "Approve the package and we schedule the next step." },
  ];

  return (
    <section className="container-pad py-6 sm:py-8">
      <div
        className="overflow-hidden rounded-[24px] px-5 py-8 text-white sm:px-8"
        style={{ background: "var(--gradient)" }}
      >
        <div className="mb-6 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
            Free consultation
          </div>
          <h2 className="font-display mt-2 text-2xl font-bold sm:text-3xl">
            Talk through your options — no obligation
          </h2>
          <p className="mt-2 text-sm text-white/90">
            Get clear advice for {site.niche.label.toLowerCase()} needs in {site.lead.cityArea}.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
              <step.icon className="text-xl text-white" />
              <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-white/85">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href="#book" className="btn-on-dark">
            Book consultation
          </a>
          <a href={site.display.whatsappLink} className="btn-on-dark-ghost">
            WhatsApp now
          </a>
        </div>
      </div>
    </section>
  );
}

export function Delivery({ site }: { site: SiteModel }) {
  if (!site.niche.specialSections.includes("delivery")) return null;

  return (
    <section className="container-pad py-4 sm:py-6">
      <div className="card-surface grid gap-4 overflow-hidden p-5 sm:p-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            <FiTruck /> Delivery available
          </div>
          <h3 className="font-display mt-3 text-2xl font-bold sm:text-3xl">
            Order & get it delivered in {site.lead.cityArea}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Message your order or request on WhatsApp — {site.lead.businessName} confirms timing and
            delivery charges instantly.
          </p>
          <a href={site.display.whatsappLink} className="btn-primary mt-4">
            Order on WhatsApp
          </a>
        </div>
        <div className="relative min-h-[160px] overflow-hidden rounded-[18px] sm:min-h-[200px]">
          <SafeImage
            src={imageAt(site.images, 1)}
            alt="Delivery"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}

export function Warranty({ site }: { site: SiteModel }) {
  if (!site.niche.specialSections.includes("warranty")) return null;

  const points = site.niche.trustPoints.slice(0, 3);

  return (
    <section className="container-pad py-4 sm:py-6">
      <div className="overflow-hidden rounded-[24px] border border-[color-mix(in_srgb,var(--primary)_18%,transparent)] bg-[var(--soft)] px-5 py-6 sm:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
              <FiShield className="text-xl" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                Warranty & guarantee
              </div>
              <h3 className="font-display mt-1 text-xl font-bold sm:text-2xl">
                Work backed by {site.lead.businessName}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-[var(--primary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href="#book" className="btn-primary w-full shrink-0 sm:w-auto">
            Get a guaranteed quote
          </a>
        </div>
      </div>
    </section>
  );
}
