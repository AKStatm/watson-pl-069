import type { NicheFamily, NicheId } from "./types";

/** Visual + section recipe. Every niche maps to a distinct layout language. */
export type LayoutId =
  | "emergency"
  | "craft"
  | "clean"
  | "tech"
  | "beauty"
  | "barber"
  | "spa"
  | "bridal"
  | "clinic"
  | "gym"
  | "restaurant"
  | "cafe"
  | "kitchen"
  | "hotel"
  | "workshop"
  | "transport"
  | "campus"
  | "arts"
  | "firm"
  | "property"
  | "events"
  | "shop";

export type HeaderTone = "light" | "dark";

export interface LayoutMeta {
  id: LayoutId;
  headerTone: HeaderTone;
  servicesVariant: "cards" | "menu" | "shop" | "list";
  galleryVariant: "masonry" | "film" | "editorial";
}

const LAYOUTS: Record<LayoutId, LayoutMeta> = {
  emergency: { id: "emergency", headerTone: "dark", servicesVariant: "cards", galleryVariant: "masonry" },
  craft: { id: "craft", headerTone: "light", servicesVariant: "cards", galleryVariant: "editorial" },
  clean: { id: "clean", headerTone: "light", servicesVariant: "cards", galleryVariant: "masonry" },
  tech: { id: "tech", headerTone: "dark", servicesVariant: "cards", galleryVariant: "masonry" },
  beauty: { id: "beauty", headerTone: "light", servicesVariant: "cards", galleryVariant: "film" },
  barber: { id: "barber", headerTone: "dark", servicesVariant: "cards", galleryVariant: "film" },
  spa: { id: "spa", headerTone: "light", servicesVariant: "cards", galleryVariant: "film" },
  bridal: { id: "bridal", headerTone: "light", servicesVariant: "cards", galleryVariant: "editorial" },
  clinic: { id: "clinic", headerTone: "light", servicesVariant: "list", galleryVariant: "masonry" },
  gym: { id: "gym", headerTone: "dark", servicesVariant: "cards", galleryVariant: "masonry" },
  restaurant: { id: "restaurant", headerTone: "dark", servicesVariant: "menu", galleryVariant: "editorial" },
  cafe: { id: "cafe", headerTone: "light", servicesVariant: "menu", galleryVariant: "film" },
  kitchen: { id: "kitchen", headerTone: "dark", servicesVariant: "menu", galleryVariant: "masonry" },
  hotel: { id: "hotel", headerTone: "dark", servicesVariant: "cards", galleryVariant: "editorial" },
  workshop: { id: "workshop", headerTone: "dark", servicesVariant: "cards", galleryVariant: "masonry" },
  transport: { id: "transport", headerTone: "dark", servicesVariant: "cards", galleryVariant: "masonry" },
  campus: { id: "campus", headerTone: "light", servicesVariant: "cards", galleryVariant: "masonry" },
  arts: { id: "arts", headerTone: "light", servicesVariant: "cards", galleryVariant: "editorial" },
  firm: { id: "firm", headerTone: "light", servicesVariant: "list", galleryVariant: "masonry" },
  property: { id: "property", headerTone: "light", servicesVariant: "cards", galleryVariant: "editorial" },
  events: { id: "events", headerTone: "light", servicesVariant: "cards", galleryVariant: "editorial" },
  shop: { id: "shop", headerTone: "light", servicesVariant: "shop", galleryVariant: "film" },
};

const NICHE_LAYOUT: Record<NicheId, LayoutId> = {
  plumber: "emergency",
  electrician: "emergency",
  "ac-hvac": "emergency",
  locksmith: "emergency",
  towing: "emergency",
  carpenter: "craft",
  painter: "craft",
  interior: "craft",
  photographer: "craft",
  roofer: "craft",
  handyman: "emergency",
  cleaning: "clean",
  "pest-control": "clean",
  "water-tank": "clean",
  moving: "clean",
  solar: "tech",
  cctv: "tech",
  electronics: "tech",
  "mobile-shop": "tech",
  salon: "beauty",
  makeup: "beauty",
  skincare: "beauty",
  barber: "barber",
  tattoo: "barber",
  spa: "spa",
  nail: "spa",
  yoga: "spa",
  mehandi: "bridal",
  dentist: "clinic",
  physiotherapy: "clinic",
  clinic: "clinic",
  lab: "clinic",
  pharmacy: "clinic",
  optician: "clinic",
  nutrition: "clinic",
  gym: "gym",
  sports: "gym",
  restaurant: "restaurant",
  catering: "restaurant",
  cafe: "cafe",
  bakery: "cafe",
  juice: "cafe",
  sweets: "cafe",
  "cloud-kitchen": "kitchen",
  hotel: "hotel",
  homestay: "hotel",
  mechanic: "workshop",
  tyre: "workshop",
  "car-ac": "workshop",
  "car-wash": "workshop",
  taxi: "transport",
  "driving-school": "transport",
  tuition: "campus",
  school: "campus",
  language: "campus",
  "computer-classes": "campus",
  music: "arts",
  dance: "arts",
  lawyer: "firm",
  "ca-accountant": "firm",
  insurance: "firm",
  visa: "firm",
  "real-estate": "property",
  "event-planner": "events",
  travel: "events",
  boutique: "shop",
  jewelry: "shop",
  furniture: "shop",
  florist: "shop",
  "pet-shop": "shop",
  printing: "shop",
  stationery: "shop",
};

export function getNicheLayout(nicheId: NicheId, family?: NicheFamily): LayoutMeta {
  const id = NICHE_LAYOUT[nicheId] || familyFallback(family);
  return LAYOUTS[id];
}

function familyFallback(family?: NicheFamily): LayoutId {
  switch (family) {
    case "beauty":
      return "beauty";
    case "food":
      return "restaurant";
    case "health":
      return "clinic";
    case "auto":
      return "workshop";
    case "education":
      return "campus";
    case "professional":
      return "firm";
    case "retail":
      return "shop";
    default:
      return "emergency";
  }
}
