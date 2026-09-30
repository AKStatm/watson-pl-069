import leadJson from "./lead.json";
import { getNiche } from "./niches";
import { getNicheTheme } from "./niche-themes";
import { getNicheImages } from "./images";
import { ensureFullPackages } from "./packages";
import { ensureFullFaqs } from "./faqs";
import { getNicheLayout, type LayoutMeta } from "./layouts";
import type { LeadData, NicheDefinition, NicheTheme } from "./types";

export const lead = normalizeLead(leadJson as LeadData);

function blank(v?: string | null) {
  return (v || "").trim();
}

function deriveCity(address: string) {
  const parts = address
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length >= 2) return parts.slice(-2).join(", ");
  return address || "Your city";
}

/** Scraped Maps data is incomplete: only name + address are required. */
function normalizeLead(raw: LeadData): LeadData {
  const businessName = blank(raw.businessName) || "Local Business";
  const address = blank(raw.address);
  const cityArea = blank(raw.cityArea) || deriveCity(address);
  return {
    ...raw,
    leadId: blank(raw.leadId) || "DEMO",
    businessName,
    address: address || cityArea,
    cityArea: cityArea || address || "Lahore",
    phone: blank(raw.phone),
    whatsapp: blank(raw.whatsapp),
    email: blank(raw.email),
    googleMapsLink: blank(raw.googleMapsLink),
    website: blank(raw.website),
    ownerName: blank(raw.ownerName),
    workingHours: blank(raw.workingHours),
    taglineOverride: blank(raw.taglineOverride),
    about: blank(raw.about),
    rating: typeof raw.rating === "number" && raw.rating > 0 ? raw.rating : undefined,
    reviewCount: typeof raw.reviewCount === "number" && raw.reviewCount > 0 ? raw.reviewCount : undefined,
  };
}

export function getSiteModel() {
  return buildSiteModel(lead);
}

export function buildSiteModel(input: LeadData, preview = false) {
  const leadData = normalizeLead(input);
  const nicheBase: NicheDefinition = getNiche(leadData.nicheId);
  const theme: NicheTheme = getNicheTheme(leadData.nicheId, nicheBase.family);
  const images = getNicheImages(leadData.nicheId, nicheBase.family);
  const layout: LayoutMeta = getNicheLayout(leadData.nicheId, nicheBase.family);

  const services =
    leadData.topServices && leadData.topServices.length > 0
      ? nicheBase.services.map((s, i) =>
          leadData.topServices![i] ? { ...s, title: leadData.topServices![i] } : s
        )
      : nicheBase.services;

  const city = leadData.cityArea;
  const niche: NicheDefinition = {
    ...nicheBase,
    services,
    tagline: leadData.taglineOverride || nicheBase.tagline,
    packages: ensureFullPackages(nicheBase, leadData.businessName),
    faqs: ensureFullFaqs(nicheBase, leadData.businessName, city),
    galleryLabels: padGallery(nicheBase.galleryLabels, nicheBase.label),
  };

  const phone = leadData.phone || leadData.whatsapp || "";
  const hasPhone = Boolean(phone);
  const hasWhatsApp = Boolean(leadData.whatsapp || leadData.phone);
  const hasEmail = Boolean(leadData.email);
  const hasRating = typeof leadData.rating === "number" && leadData.rating > 0;
  const reviewCount = leadData.reviewCount || 0;

  return {
    lead: leadData,
    niche,
    theme,
    images,
    layout,
    preview,
    display: {
      phoneDisplay: hasPhone ? formatPkPhone(phone) : "",
      whatsappLink: hasWhatsApp
        ? buildWhatsAppLink(leadData.whatsapp || leadData.phone || "", niche.whatsappPreset)
        : "",
      mapsLink:
        leadData.googleMapsLink ||
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${leadData.businessName} ${leadData.address}`
        )}`,
      mapsEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(
        `${leadData.businessName} ${leadData.address || city}`
      )}&z=15&output=embed`,
      rating: hasRating ? leadData.rating! : 0,
      reviewCount,
      hours: leadData.workingHours || "Message us to confirm today's hours",
      about:
        leadData.about ||
        `${leadData.businessName} is a local ${niche.label.toLowerCase()} in ${city}. Name and address are live — book or visit using the details below.`,
      hasPhone,
      hasWhatsApp,
      hasEmail,
      hasRating,
      hasReviews: reviewCount > 0,
      hasHours: Boolean(leadData.workingHours),
    },
  };
}

export type SiteModel = ReturnType<typeof buildSiteModel>;

function padGallery(labels: string[], label: string) {
  const extras = [
    `${label} interior`,
    "Team at work",
    "Customer space",
    "Detail finish",
    "Ready for you",
    "Local service",
  ];
  const out = [...labels];
  let i = 0;
  while (out.length < 8) {
    out.push(extras[i % extras.length]);
    i += 1;
  }
  return out.slice(0, 8);
}

function formatPkPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `0${digits.slice(0, 3)} ${digits.slice(3, 10)}`;
  if (digits.length === 11 && digits.startsWith("0"))
    return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  if (digits.length === 12 && digits.startsWith("92"))
    return `0${digits.slice(2, 5)} ${digits.slice(5)}`;
  return raw;
}

function buildWhatsAppLink(raw: string, preset: string) {
  let digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0")) digits = `92${digits.slice(1)}`;
  if (digits.length === 10) digits = `92${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(preset)}`;
}
