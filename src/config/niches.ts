import type { NicheDefinition, NicheId } from "./types";
import { NICHES as HOME } from "./niches-home";
import { NICHES_BEAUTY } from "./niches-beauty";
import { NICHES_HEALTH } from "./niches-health";
import { NICHES_FOOD } from "./niches-food";
import { NICHES_AUTO, NICHES_EDUCATION } from "./niches-auto-edu";
import { NICHES_PROFESSIONAL, NICHES_RETAIL } from "./niches-pro-retail";

export const NICHES = {
  ...HOME,
  ...NICHES_BEAUTY,
  ...NICHES_HEALTH,
  ...NICHES_FOOD,
  ...NICHES_AUTO,
  ...NICHES_EDUCATION,
  ...NICHES_PROFESSIONAL,
  ...NICHES_RETAIL,
} as Record<NicheId, NicheDefinition>;

export function getNiche(id: NicheId): NicheDefinition {
  const niche = NICHES[id];
  if (!niche) {
    throw new Error(`Unknown niche: ${id}`);
  }
  return niche;
}

export function listNiches(): NicheDefinition[] {
  return Object.values(NICHES);
}

export function resolveNicheFromCategory(category: string): NicheId {
  const c = category.toLowerCase();
  const entries = Object.values(NICHES);
  for (const niche of entries) {
    if (c.includes(niche.label.toLowerCase()) || niche.id.replace(/-/g, " ") === c) {
      return niche.id;
    }
    for (const term of niche.mapsSearches) {
      if (c.includes(term.toLowerCase())) return niche.id;
    }
  }
  if (c.includes("plumb")) return "plumber";
  if (c.includes("electric")) return "electrician";
  if (c.includes("ac") || c.includes("hvac") || c.includes("cool")) return "ac-hvac";
  return "handyman";
}
