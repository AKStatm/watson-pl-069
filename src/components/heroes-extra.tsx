"use client";

import { FaStar, FaWhatsapp } from "react-icons/fa";
import { FiClock, FiMapPin } from "react-icons/fi";
import type { SiteModel } from "@/config/site";
import { SafeImage } from "./SafeImage";
import { imageAt } from "@/config/images";

export function MetaRow({ site }: { site: SiteModel }) {
  return (
    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90">
      {site.display.hasRating ? (
        <span className="inline-flex items-center gap-2">
          <FaStar className="text-amber-300" />
          {site.display.rating.toFixed(1)}
          {site.display.hasReviews ? ` · ${site.display.reviewCount}+ reviews` : ""}
        </span>
      ) : null}
      <span className="inline-flex items-center gap-2">
        <FiMapPin /> {site.lead.cityArea}
      </span>
      <span className="inline-flex items-center gap-2">
        <FiClock /> {site.display.hours}
      </span>
    </div>
  );
}

export function DarkCtas({ site }: { site: SiteModel }) {
  return (
    <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <a href="#book" className="btn-on-dark shadow-lg">
        {site.niche.ctaPrimary}
      </a>
      {site.display.hasWhatsApp ? (
        <a href={site.display.whatsappLink} className="btn-on-dark-ghost">
          <FaWhatsapp className="text-lg" /> {site.niche.ctaSecondary}
        </a>
      ) : (
        <a href="#contact" className="btn-on-dark-ghost">
          {site.niche.ctaSecondary}
        </a>
      )}
    </div>
  );
}

export function LightCtas({ site }: { site: SiteModel }) {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <a
        href="#book"
        className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
        style={{ background: "var(--primary)" }}
      >
        {site.niche.ctaPrimary}
      </a>
      {site.display.hasWhatsApp ? (
        <a
          href={site.display.whatsappLink}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-slate-900"
        >
          <FaWhatsapp className="text-[#25d366]" /> {site.niche.ctaSecondary}
        </a>
      ) : (
        <a href="#contact" className="btn-secondary">
          {site.niche.ctaSecondary}
        </a>
      )}
    </div>
  );
}

export function BarberHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#111] text-white">
      <div className="absolute inset-0 opacity-40">
        <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      <div className="container-pad relative grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-3 inline-flex rounded-sm bg-red-600 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em]">
            {site.niche.label}
          </div>
          <h1 className="font-display text-[2.4rem] font-extrabold leading-[1.05] sm:text-6xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-lg text-white/80">{site.niche.heroSubtitle}</p>
          <DarkCtas site={site} />
          <MetaRow site={site} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-36 overflow-hidden rounded-sm sm:h-44">
              <SafeImage src={imageAt(site.images, i)} alt="" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpaHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F4FFFC] text-slate-900">
      <div className="container-pad grid items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-800">
            {site.niche.label} · unwind
          </div>
          <h1 className="font-display text-[2.2rem] font-extrabold leading-[1.12] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-lg text-slate-600">{site.niche.heroSubtitle}</p>
          <LightCtas site={site} />
        </div>
        <div className="relative h-[340px] overflow-hidden rounded-[40px] sm:h-[460px]">
          <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="50vw" priority />
        </div>
      </div>
    </section>
  );
}

export function GymHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative min-h-[82vh] overflow-hidden text-white">
      <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 bg-black/65" />
      <div className="container-pad relative flex min-h-[82vh] flex-col justify-end py-14">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex bg-red-600 px-3 py-1 text-xs font-extrabold uppercase tracking-widest">
            {site.niche.label}
          </div>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-7xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-white/85">{site.niche.heroSubtitle}</p>
          <DarkCtas site={site} />
        </div>
      </div>
    </section>
  );
}

export function CafeHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FBF6EE] text-stone-900">
      <div className="container-pad grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="relative h-[320px] overflow-hidden rounded-[32px] sm:h-[440px]">
          <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="50vw" priority />
        </div>
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
            {site.niche.label} · {site.lead.cityArea.split(",")[0]}
          </div>
          <h1 className="font-display text-[2.3rem] font-extrabold leading-[1.1] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 text-stone-600">{site.niche.heroSubtitle}</p>
          <LightCtas site={site} />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {site.niche.services.slice(0, 4).map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-3 shadow-sm">
                <div className="text-sm font-bold">{s.title}</div>
                <div className="text-xs text-stone-500">{s.priceFrom || "Ask"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HotelHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative min-h-[88vh] overflow-hidden text-white">
      <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className="container-pad relative flex min-h-[88vh] flex-col justify-end pb-16">
        <div className="max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
            {site.niche.label}
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-white/85">{site.niche.heroSubtitle}</p>
          <DarkCtas site={site} />
        </div>
      </div>
    </section>
  );
}

export function CraftHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FAF7F2] text-stone-900">
      <div className="container-pad py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
            {site.niche.label} · studio
          </div>
          <h1 className="font-display text-[2.2rem] font-extrabold leading-[1.1] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 text-stone-600">{site.niche.heroSubtitle}</p>
          <LightCtas site={site} />
        </div>
        <div className="mt-10 columns-2 gap-3 md:columns-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`relative mb-3 overflow-hidden rounded-2xl ${i % 3 === 0 ? "h-52" : "h-36"}`}
            >
              <SafeImage src={imageAt(site.images, i)} alt="" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PropertyHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-white text-slate-900">
      <div className="relative h-[46vh] min-h-[280px] sm:h-[56vh]">
        <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="container-pad relative flex h-full items-end pb-8 text-white">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{site.niche.label}</div>
            <h1 className="font-display mt-2 text-3xl font-extrabold sm:text-5xl">{site.niche.heroTitle}</h1>
          </div>
        </div>
      </div>
      <div className="container-pad grid gap-4 py-8 md:grid-cols-3">
        {site.niche.services.slice(0, 3).map((s, i) => (
          <div key={s.title} className="card-surface overflow-hidden">
            <div className="relative h-32">
              <SafeImage src={imageAt(site.images, i + 1)} alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="p-4">
              <div className="font-bold">{s.title}</div>
              <div className="text-sm text-[var(--muted)]">{s.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EventsHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a044e]/90 via-black/55 to-transparent" />
      <div className="container-pad relative py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-pink-200">
            {site.niche.label}
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 text-white/90">{site.niche.heroSubtitle}</p>
          <DarkCtas site={site} />
        </div>
      </div>
    </section>
  );
}

export function KitchenHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#1c1917] text-white">
      <div className="container-pad grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-18">
        <div>
          <div className="mb-3 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-extrabold uppercase">
            Delivery · {site.niche.label}
          </div>
          <h1 className="font-display text-[2.3rem] font-extrabold leading-[1.08] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 text-white/80">{site.niche.heroSubtitle}</p>
          <DarkCtas site={site} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {site.niche.services.slice(0, 4).map((s, i) => (
            <div key={s.title} className="overflow-hidden rounded-2xl bg-white/5">
              <div className="relative h-24">
                <SafeImage src={imageAt(site.images, i)} alt="" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="p-3">
                <div className="text-sm font-bold">{s.title}</div>
                <div className="text-xs text-white/60">{s.priceFrom || "Order"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="hero-grid relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-pad relative grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
            {site.niche.label}
          </div>
          <h1 className="font-display text-[2.3rem] font-extrabold leading-[1.08] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 text-white/80">{site.niche.heroSubtitle}</p>
          <DarkCtas site={site} />
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-[28px] ring-1 ring-white/15 sm:h-[380px]">
          <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="50vw" priority />
        </div>
      </div>
    </section>
  );
}
