import type { NicheDefinition, NicheFamily, NicheFaq } from "./types";

export function ensureFullFaqs(niche: NicheDefinition, business: string, city: string): NicheFaq[] {
  const extras = familyFaqs(niche.family, niche.label, business, city);
  const byQ = new Map<string, NicheFaq>();
  for (const faq of [...niche.faqs, ...extras]) {
    if (!byQ.has(faq.q)) byQ.set(faq.q, faq);
  }
  return Array.from(byQ.values()).slice(0, 6);
}

function familyFaqs(family: NicheFamily, label: string, business: string, city: string): NicheFaq[] {
  const L = label.toLowerCase();
  const common: NicheFaq[] = [
    {
      q: "How do I book?",
      a: `Tap Book or WhatsApp. Share your name, area in ${city}, and what you need. ${business} confirms the next available slot.`,
    },
    {
      q: "Which areas do you cover?",
      a: `We serve ${city} and nearby areas. Message your location first if you are unsure about coverage.`,
    },
    {
      q: "Do I need to pay online?",
      a: "This demo confirms on WhatsApp. You can agree cash, bank, or other payment after the booking is confirmed.",
    },
  ];

  const extra: Record<NicheFamily, NicheFaq[]> = {
    "home-services": [
      { q: "Do you handle emergencies?", a: `Yes — urgent ${L} jobs are prioritized. Share photos of the issue on WhatsApp for a faster estimate.` },
      { q: "Are parts included?", a: "Labour is quoted first. Parts are shared for approval before we fit them." },
    ],
    beauty: [
      { q: "Should I book in advance?", a: "Weekends and bridal slots fill fast. Book 1–3 days ahead, or a week ahead for bridal." },
      { q: "Do you offer home service?", a: "Ask on WhatsApp — selected party/bridal home service is often available in nearby areas." },
    ],
    health: [
      { q: "Do I need an appointment?", a: "Appointments are recommended. Walk-ins may be possible depending on the day's list." },
      { q: "What should I bring?", a: "Bring any previous reports, a medication list, and your preferred time window." },
    ],
    food: [
      { q: "Do you take table / order bookings?", a: `Yes — WhatsApp your party size, time, and any allergies. ${business} confirms availability.` },
      { q: "Is delivery available?", a: `Ask on WhatsApp for delivery coverage around ${city}.` },
    ],
    auto: [
      { q: "How long will the job take?", a: "Quick services are often same-day. Full repairs depend on inspection and parts — we update you on WhatsApp." },
      { q: "Can I wait at the workshop?", a: "Yes for shorter jobs. For longer work we share pickup timing." },
    ],
    education: [
      { q: "Are trial classes available?", a: "Usually yes — message for the next trial or demo class timing." },
      { q: "What is the batch size?", a: "Batch sizes stay small enough for attention. Private coaching is also available." },
    ],
    professional: [
      { q: "Is the first consult charged?", a: "Share your case briefly on WhatsApp. We'll tell you if the first consult is complimentary or billed." },
      { q: "Do you handle documents online?", a: "Yes — scans on WhatsApp are fine to start. Originals may be needed later." },
    ],
    retail: [
      { q: "Can I reserve an item?", a: "Yes — send a photo or product name on WhatsApp and we hold it for pickup." },
      { q: "Do you deliver?", a: `Delivery in ${city} can be arranged after you confirm the order.` },
    ],
  };

  return [...common, ...(extra[family] || [])];
}
