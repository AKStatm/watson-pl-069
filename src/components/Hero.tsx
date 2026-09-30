"use client";

import { FaStar, FaWhatsapp } from "react-icons/fa";
import {
  FiClock,
  FiHeart,
  FiMapPin,
  FiShield,
  FiShoppingBag,
  FiTool,
  FiTruck,
  FiBookOpen,
  FiBriefcase,
} from "react-icons/fi";
import type { SiteModel } from "@/config/site";
import type { NicheFamily } from "@/config/types";
import { SafeImage } from "./SafeImage";
import { imageAt } from "@/config/images";
import {
  BarberHero,
  SpaHero,
  GymHero,
  CafeHero,
  HotelHero,
  CraftHero,
  PropertyHero,
  EventsHero,
  KitchenHero,
  TechHero,
} from "./heroes-extra";

const familyIcon: Record<NicheFamily, typeof FiTool> = {
  "home-services": FiTool,
  beauty: FiHeart,
  health: FiShield,
  food: FiShoppingBag,
  auto: FiTruck,
  education: FiBookOpen,
  professional: FiBriefcase,
  retail: FiShoppingBag,
};

export function Hero({ site }: { site: SiteModel }) {
  switch (site.layout.id) {
    case "barber":
      return <BarberHero site={site} />;
    case "spa":
      return <SpaHero site={site} />;
    case "gym":
      return <GymHero site={site} />;
    case "cafe":
      return <CafeHero site={site} />;
    case "hotel":
      return <HotelHero site={site} />;
    case "craft":
      return <CraftHero site={site} />;
    case "property":
      return <PropertyHero site={site} />;
    case "events":
      return <EventsHero site={site} />;
    case "kitchen":
      return <KitchenHero site={site} />;
    case "tech":
      return <TechHero site={site} />;
    case "beauty":
    case "bridal":
      return <BeautyHero site={site} />;
    case "restaurant":
      return <FoodHero site={site} />;
    case "clinic":
      return <HealthHero site={site} />;
    case "workshop":
    case "transport":
      return <AutoHero site={site} />;
    case "campus":
    case "arts":
      return <EducationHero site={site} />;
    case "firm":
      return <ProHero site={site} />;
    case "shop":
      return <RetailHero site={site} />;
    case "clean":
      return <HomeServicesHero site={site} />;
    default:
      return <HomeServicesHero site={site} />;
  }
}

function MetaRow({ site }: { site: SiteModel }) {
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

function DarkCtas({ site }: { site: SiteModel }) {
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

function BookingCard({ site }: { site: SiteModel }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-black/5 bg-white text-slate-900 shadow-2xl">
      <div className="relative h-40 w-full bg-slate-100 sm:h-44">
        <SafeImage
          src={imageAt(site.images, 1)}
          alt={`${site.niche.label} preview`}
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 40vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">
          Serving {site.lead.cityArea}
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Quick book</div>
        <h2 className="font-display mt-1 text-xl font-bold sm:text-2xl">{site.lead.businessName}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{site.display.about}</p>
        <div className="mt-4 grid gap-2">
          {site.niche.trustPoints.slice(0, 3).map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-800">
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "var(--primary)" }}
              >
                ✓
              </span>
              {point}
            </div>
          ))}
        </div>
        <a
          href="#book"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white"
          style={{ background: "var(--primary)" }}
        >
          {site.niche.bookingLabel}
        </a>
      </div>
    </div>
  );
}

/** Plumber / electrician / AC style — urgency + tools */
function HomeServicesHero({ site }: { site: SiteModel }) {
  const Icon = familyIcon["home-services"];
  return (
    <section id="top" className="hero-mesh relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container-pad relative grid items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="min-w-0">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-900">
            <Icon /> Same-day · {site.niche.label}
          </div>
          <h1 className="font-display break-words text-[2rem] font-extrabold leading-[1.12] sm:text-5xl lg:text-[3.2rem]">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-lg">
            {site.niche.heroSubtitle}
          </p>
          <DarkCtas site={site} />
          <MetaRow site={site} />
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {site.niche.services.slice(0, 4).map((s) => (
              <div key={s.title} className="rounded-2xl bg-white/10 px-3 py-2.5 text-xs font-semibold backdrop-blur">
                {s.title}
              </div>
            ))}
          </div>
        </div>
        <BookingCard site={site} />
      </div>
    </section>
  );
}

/** Salon / spa — soft light elegant */
function BeautyHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FFF7FB] text-slate-900">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-amber-100/70 blur-3xl" />
      <div className="container-pad relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="order-2 lg:order-1">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pink-700">
            {site.niche.label} · Beauty
          </div>
          <h1 className="font-display text-[2.2rem] font-extrabold leading-[1.1] text-slate-900 sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg">{site.niche.heroSubtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ background: "var(--primary)" }}
            >
              {site.niche.ctaPrimary}
            </a>
            <a
              href={site.display.whatsappLink}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3 text-sm font-bold text-slate-900"
            >
              <FaWhatsapp className="text-[#25d366]" /> {site.niche.ctaSecondary}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <FaStar className="text-amber-500" /> {site.display.rating.toFixed(1)} rating
            </span>
            <span>{site.lead.cityArea}</span>
          </div>
        </div>
        <div className="order-1 grid grid-cols-2 gap-3 lg:order-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-[28px] ${i === 0 ? "col-span-2 h-48 sm:h-56" : "h-36"}`}
            >
              <SafeImage src={imageAt(site.images, i)} alt="" fill className="object-cover" sizes="50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Restaurant / cafe — full image hero */
function FoodHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative min-h-[78vh] overflow-hidden text-white">
      <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="container-pad relative flex min-h-[78vh] flex-col justify-end py-14 lg:max-w-3xl lg:justify-center">
        <div className="mb-3 inline-flex w-fit rounded-full bg-orange-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
          {site.niche.label} · Order / Dine
        </div>
        <h1 className="font-display text-[2.4rem] font-extrabold leading-[1.08] sm:text-6xl">
          {site.niche.heroTitle}
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">{site.niche.heroSubtitle}</p>
        <DarkCtas site={site} />
        <MetaRow site={site} />
      </div>
    </section>
  );
}

/** Clinic / dentist — clean trust layout */
function HealthHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F8FBFF] text-slate-900">
      <div className="absolute inset-x-0 top-0 h-2" style={{ background: "var(--primary)" }} />
      <div className="container-pad grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
            <FiShield /> Certified care · {site.niche.label}
          </div>
          <h1 className="font-display text-[2.2rem] font-extrabold leading-[1.12] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">{site.niche.heroSubtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ background: "var(--primary)" }}
            >
              {site.niche.ctaPrimary}
            </a>
            <a
              href={site.display.whatsappLink}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900"
            >
              <FaWhatsapp className="text-[#25d366]" /> {site.niche.ctaSecondary}
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { k: site.display.rating.toFixed(1), v: "Rating" },
              { k: `${site.display.reviewCount}+`, v: "Reviews" },
              { k: "24h", v: "Reply" },
            ].map((stat) => (
              <div key={stat.v} className="rounded-2xl border border-slate-200 bg-white p-3 text-center">
                <div className="font-display text-xl font-bold text-slate-900">{stat.k}</div>
                <div className="text-xs text-slate-500">{stat.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[320px] overflow-hidden rounded-[32px] sm:h-[420px]">
          <SafeImage src={imageAt(site.images, 0)} alt="" fill className="object-cover" sizes="50vw" />
        </div>
      </div>
    </section>
  );
}

/** Mechanic / car wash — dark industrial */
function AutoHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="hero-grid relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-black/45" />
      <div className="container-pad relative py-14 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex rounded-md bg-red-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide">
            Workshop · {site.niche.label}
          </div>
          <h1 className="font-display text-[2.3rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">{site.niche.heroSubtitle}</p>
          <DarkCtas site={site} />
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.niche.services.slice(0, 4).map((s, i) => (
            <div key={s.title} className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
              <div className="relative h-28">
                <SafeImage src={imageAt(site.images, i)} alt="" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="p-3">
                <div className="text-sm font-bold">{s.title}</div>
                <div className="text-xs text-white/70">{s.priceFrom || "Ask"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Tuition / courses — bright academic */
function EducationHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FAF8FF] text-slate-900">
      <div className="container-pad grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <div className="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-violet-800">
            <FiBookOpen className="mr-1" /> Batches open · {site.niche.label}
          </div>
          <h1 className="font-display text-[2.2rem] font-extrabold leading-[1.12] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">{site.niche.heroSubtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ background: "var(--primary)" }}
            >
              {site.niche.ctaPrimary}
            </a>
            <a href="#packages" className="btn-secondary">
              View packages
            </a>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {site.niche.packages.slice(0, 4).map((pkg, i) => (
            <div key={pkg.name} className="rounded-3xl border border-violet-100 bg-white p-4 shadow-sm">
              <div className="relative mb-3 h-24 overflow-hidden rounded-2xl">
                <SafeImage src={imageAt(site.images, i)} alt="" fill className="object-cover" sizes="40vw" />
              </div>
              <div className="font-bold">{pkg.name}</div>
              <div className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                {pkg.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Lawyer / CA — calm professional */
function ProHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F4FAF9] text-slate-900">
      <div className="container-pad grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-800">
            Professional · {site.niche.label}
          </div>
          <h1 className="font-display max-w-xl text-[2.3rem] font-extrabold leading-[1.12] sm:text-5xl">
            {site.niche.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">{site.niche.heroSubtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ background: "var(--primary)" }}
            >
              {site.niche.ctaPrimary}
            </a>
            <a
              href={site.display.whatsappLink}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-teal-200 bg-white px-6 py-3 text-sm font-bold text-slate-900"
            >
              <FaWhatsapp className="text-[#25d366]" /> {site.niche.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="rounded-[28px] border border-teal-100 bg-white p-6 shadow-lg">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Consultation</div>
          <div className="font-display mt-2 text-2xl font-bold">{site.lead.businessName}</div>
          <p className="mt-2 text-sm text-slate-600">{site.display.about}</p>
          <ul className="mt-5 space-y-2">
            {site.niche.features.slice(0, 3).map((f) => (
              <li key={f.title} className="rounded-xl bg-teal-50 px-3 py-2 text-sm font-medium text-teal-950">
                {f.title}
              </li>
            ))}
          </ul>
          <a href="#book" className="btn-primary mt-5 w-full">
            {site.niche.bookingLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Boutique / shop — product window */
function RetailHero({ site }: { site: SiteModel }) {
  return (
    <section id="top" className="relative overflow-hidden bg-white text-slate-900">
      <div className="container-pad py-10 lg:py-14">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
              Store · {site.niche.label}
            </div>
            <h1 className="font-display text-[2.2rem] font-extrabold leading-[1.1] sm:text-5xl">
              {site.niche.heroTitle}
            </h1>
            <p className="mt-3 text-slate-600">{site.niche.heroSubtitle}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ background: "var(--primary)" }}
            >
              {site.niche.ctaPrimary}
            </a>
            <a
              href={site.display.whatsappLink}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-bold"
            >
              <FaWhatsapp className="text-[#25d366]" /> WhatsApp order
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {site.niche.services.slice(0, 4).map((s, i) => (
            <div key={s.title} className="overflow-hidden rounded-[22px] border border-slate-100 bg-slate-50">
              <div className="relative h-40 sm:h-48">
                <SafeImage src={imageAt(site.images, i)} alt={s.title} fill className="object-cover" sizes="25vw" />
              </div>
              <div className="p-3">
                <div className="text-sm font-bold">{s.title}</div>
                <div className="text-xs text-slate-500">{s.priceFrom || "In store"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
