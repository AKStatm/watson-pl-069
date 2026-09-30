import type { NicheDefinition, NicheFamily } from "./types";

type Pkg = NicheDefinition["packages"][number];

/** Ensure every niche shows a full commercial package ladder (4 tiers). */
export function ensureFullPackages(
  niche: NicheDefinition,
  businessName: string
): Pkg[] {
  const existing = niche.packages || [];
  const extras = familyExtraPackages(niche.family, niche.label, businessName);

  const byName = new Map<string, Pkg>();
  for (const p of [...existing, ...extras]) {
    if (!byName.has(p.name)) byName.set(p.name, p);
  }

  const merged = Array.from(byName.values());

  // Prefer: keep first 2 niche packages, ensure a highlighted middle, add AMC/premium
  if (merged.length >= 4) {
    // guarantee one highlighted
    if (!merged.some((p) => p.highlighted)) {
      merged[1] = { ...merged[1], highlighted: true };
    }
    return merged.slice(0, 4);
  }

  while (merged.length < 4) {
    merged.push(extras[merged.length] || fallbackPackage(merged.length, niche.label));
  }

  if (!merged.some((p) => p.highlighted)) {
    merged[1] = { ...merged[1], highlighted: true };
  }

  return merged.slice(0, 4);
}

function familyExtraPackages(family: NicheFamily, label: string, business: string): Pkg[] {
  const L = label.toLowerCase();
  switch (family) {
    case "home-services":
      return [
        {
          name: "Emergency visit",
          price: "Rs 1,500+",
          items: ["Priority dispatch", "On-site diagnosis", "WhatsApp updates", "Basic fix labor"],
        },
        {
          name: "Standard job",
          price: "Custom quote",
          items: ["Site survey", "Transparent estimate", "Quality materials advice", "Clean finish"],
          highlighted: true,
        },
        {
          name: "Premium complete",
          price: "Custom",
          items: ["End-to-end work", "Parts coordination", "Testing before leave", "7-day workmanship care"],
        },
        {
          name: "Monthly AMC",
          price: "Rs 4,999",
          period: "/mo",
          items: ["2 priority visits", "Discounted labor", "Fast WhatsApp support", `Preferred slot at ${business}`],
        },
      ];
    case "beauty":
      return [
        {
          name: "Essential",
          price: "From Rs 1,500",
          items: ["Single service", "Hygienic tools", "Quick slot"],
        },
        {
          name: "Glow / Groom",
          price: "From Rs 4,500",
          items: ["Combo services", "Premium products", "Photo-ready finish"],
          highlighted: true,
        },
        {
          name: "Party / Bridal",
          price: "Custom",
          items: ["Trial option", "Long-wear look", "On-time arrival", "Touch-up guidance"],
        },
        {
          name: "Membership",
          price: "Custom",
          period: "/mo",
          items: ["Priority booking", "Member discount", "Seasonal offers"],
        },
      ];
    case "health":
      return [
        {
          name: "Consult / session",
          price: "From Rs 1,500",
          items: ["Assessment", "Clear advice", "Next-step plan"],
        },
        {
          name: "Care plan",
          price: "Custom",
          items: ["Multi-session plan", "Progress follow-up", "WhatsApp support"],
          highlighted: true,
        },
        {
          name: "Family / package",
          price: "Custom",
          items: ["Multi-person value", "Scheduled visits", "Priority slots"],
        },
        {
          name: "Follow-up pack",
          price: "Custom",
          items: ["Review visits", "Adjusted plan", "Reminder support"],
        },
      ];
    case "food":
      return [
        {
          name: "Starter order",
          price: "From Rs 499",
          items: ["Popular items", "Fresh prep", "Quick confirm"],
        },
        {
          name: "Family / share",
          price: "From Rs 2,499",
          items: ["Sharing portions", "Best-value combo", "Ideal for 3–6"],
          highlighted: true,
        },
        {
          name: "Event / catering",
          price: "Custom",
          items: ["Guest-count quote", "On-time delivery/setup", "Custom menu"],
        },
        {
          name: "Subscription / weekly",
          price: "Custom",
          period: "/wk",
          items: ["Repeat orders", "Priority prep", "Easy WhatsApp reorder"],
        },
      ];
    case "auto":
      return [
        {
          name: "Quick service",
          price: "From Rs 800",
          items: ["Fast slot", "Basic check", "Clear pricing"],
        },
        {
          name: "Full service",
          price: "Custom",
          items: ["Detailed job", "Parts approval", "Quality check"],
          highlighted: true,
        },
        {
          name: "Premium detail / repair",
          price: "Custom",
          items: ["Deep work", "Protection options", "Before/after care"],
        },
        {
          name: "Fleet / monthly",
          price: "Custom",
          period: "/mo",
          items: ["Repeat vehicles", "Priority bay", "Business rates"],
        },
      ];
    case "education":
      return [
        {
          name: "Trial / drop-in",
          price: "From Rs 1,500",
          items: ["Try a class", "Meet coach/teacher", "No long commit"],
        },
        {
          name: "Monthly batch",
          price: "Custom",
          period: "/mo",
          items: ["Regular classes", "Progress tracking", "Notes/practice"],
          highlighted: true,
        },
        {
          name: "Private coaching",
          price: "Custom",
          items: ["1-on-1 focus", "Flexible timing", "Faster results"],
        },
        {
          name: "Term / quarterly",
          price: "Custom",
          items: ["Best savings", "Exam/event prep", "Parent updates"],
        },
      ];
    case "professional":
      return [
        {
          name: "Consultation",
          price: "From Rs 2,000",
          items: ["30–45 min consult", "Clear next steps", "Confidential"],
        },
        {
          name: "Standard engagement",
          price: "Custom",
          items: ["Scoped work", "Timeline agreed", "WhatsApp updates"],
          highlighted: true,
        },
        {
          name: "Premium / full service",
          price: "Custom",
          items: ["End-to-end handling", "Priority response", "Document support"],
        },
        {
          name: "Retainer",
          price: "Custom",
          period: "/mo",
          items: ["Monthly support hours", "Priority booking", `Ongoing help from ${business}`],
        },
      ];
    case "retail":
      return [
        {
          name: "Ready to buy",
          price: "In-store prices",
          items: ["Browse collection", "Size/fit help", "Counter pickup"],
        },
        {
          name: "Best seller bundle",
          price: "Custom",
          items: ["Popular combo", "Better value", "Gift-ready option"],
          highlighted: true,
        },
        {
          name: "Custom / premium order",
          price: "Custom",
          items: ["Made-to-order", "Design confirm", "Delivery options"],
        },
        {
          name: "Bulk / business",
          price: "Wholesale quote",
          items: ["List-based order", "Bulk pricing", "Repeat supply"],
        },
      ];
    default:
      return [
        fallbackPackage(0, L),
        fallbackPackage(1, L),
        fallbackPackage(2, L),
        fallbackPackage(3, L),
      ];
  }
}

function fallbackPackage(index: number, label: string): Pkg {
  const names = ["Starter", "Standard", "Premium", "Monthly care"];
  const prices = ["Ask quote", "Custom", "Custom", "Custom"];
  return {
    name: names[index] || `Package ${index + 1}`,
    price: prices[index] || "Custom",
    highlighted: index === 1,
    items: [
      `Trusted ${label} service`,
      "WhatsApp booking",
      "Clear estimate",
      "Local support",
    ],
  };
}
