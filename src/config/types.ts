export type NicheFamily =
  | "home-services"
  | "beauty"
  | "health"
  | "food"
  | "auto"
  | "education"
  | "professional"
  | "retail";

export type NicheId =
  | "plumber"
  | "electrician"
  | "ac-hvac"
  | "carpenter"
  | "painter"
  | "roofer"
  | "handyman"
  | "cleaning"
  | "pest-control"
  | "water-tank"
  | "solar"
  | "cctv"
  | "locksmith"
  | "moving"
  | "interior"
  | "salon"
  | "barber"
  | "spa"
  | "nail"
  | "makeup"
  | "mehandi"
  | "tattoo"
  | "skincare"
  | "dentist"
  | "physiotherapy"
  | "gym"
  | "yoga"
  | "clinic"
  | "lab"
  | "pharmacy"
  | "optician"
  | "nutrition"
  | "restaurant"
  | "cafe"
  | "bakery"
  | "cloud-kitchen"
  | "catering"
  | "juice"
  | "sweets"
  | "hotel"
  | "homestay"
  | "car-wash"
  | "mechanic"
  | "tyre"
  | "driving-school"
  | "taxi"
  | "towing"
  | "car-ac"
  | "tuition"
  | "school"
  | "music"
  | "dance"
  | "sports"
  | "language"
  | "computer-classes"
  | "lawyer"
  | "ca-accountant"
  | "real-estate"
  | "insurance"
  | "photographer"
  | "event-planner"
  | "travel"
  | "visa"
  | "boutique"
  | "jewelry"
  | "mobile-shop"
  | "electronics"
  | "furniture"
  | "pet-shop"
  | "florist"
  | "printing"
  | "stationery";

export interface NicheTheme {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  soft: string;
  surface: string;
  ink: string;
  muted: string;
  gradient: string;
  heroPattern: "mesh" | "waves" | "dots" | "grid" | "bloom";
}

export interface NicheService {
  title: string;
  description: string;
  priceFrom?: string;
  popular?: boolean;
}

export interface NicheFeature {
  title: string;
  description: string;
}

export interface NicheFaq {
  q: string;
  a: string;
}

export interface NicheDefinition {
  id: NicheId;
  label: string;
  family: NicheFamily;
  mapsSearches: string[];
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  bookingLabel: string;
  servicesTitle: string;
  services: NicheService[];
  features: NicheFeature[];
  faqs: NicheFaq[];
  galleryLabels: string[];
  trustPoints: string[];
  packages: {
    name: string;
    price: string;
    period?: string;
    items: string[];
    highlighted?: boolean;
  }[];
  specialSections: Array<
    | "emergency"
    | "booking"
    | "menu"
    | "menu-cards"
    | "before-after"
    | "classes"
    | "portfolio"
    | "consultation"
    | "delivery"
    | "warranty"
  >;
  whatsappPreset: string;
}

export interface LeadData {
  leadId: string;
  businessName: string;
  nicheId: NicheId;
  category: string;
  /** Optional on scraped leads — hide call CTAs when empty */
  phone?: string;
  whatsapp?: string;
  email?: string;
  address: string;
  cityArea: string;
  googleMapsLink?: string;
  website?: string;
  rating?: number;
  reviewCount?: number;
  topServices?: string[];
  ownerName?: string;
  yearsExperience?: number;
  workingHours?: string;
  taglineOverride?: string;
  about?: string;
  urduSupport?: boolean;
}
