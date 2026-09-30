import { getSiteModel, type SiteModel } from "@/config/site";
import { getNiche, NICHES } from "@/config/niches";
import { getNicheTheme } from "@/config/niche-themes";
import { getNicheImages } from "@/config/images";
import { ensureFullPackages } from "@/config/packages";
import { ensureFullFaqs } from "@/config/faqs";
import { getNicheLayout } from "@/config/layouts";
import type { NicheId } from "@/config/types";

export function showNichePreview() {
  if (process.env.NEXT_PUBLIC_SHOW_NICHE_PREVIEW === "true") return true;
  if (process.env.NEXT_PUBLIC_SHOW_NICHE_PREVIEW === "false") return false;
  return process.env.NODE_ENV !== "production";
}

export async function resolveSite(
  searchParams?: Promise<{ niche?: string }>
): Promise<SiteModel> {
  const params = (await searchParams) || {};
  const preview = showNichePreview();
  const base = getSiteModel();

  if (!preview) return { ...base, preview: false };

  const nicheId = (params.niche as NicheId) || base.lead.nicheId;
  if (!NICHES[nicheId] || nicheId === base.lead.nicheId) {
    return { ...base, preview: true };
  }

  const nicheDef = getNiche(nicheId);
  const theme = getNicheTheme(nicheId, nicheDef.family);
  const images = getNicheImages(nicheId, nicheDef.family);
  const layout = getNicheLayout(nicheId, nicheDef.family);

  const niche = {
    ...nicheDef,
    packages: ensureFullPackages(nicheDef, base.lead.businessName),
    faqs: ensureFullFaqs(nicheDef, base.lead.businessName, base.lead.cityArea || "Lahore"),
    galleryLabels: [...nicheDef.galleryLabels, "Interior", "Team", "Detail", "Ready"].slice(0, 8),
  };

  return {
    ...base,
    preview: true,
    images,
    theme,
    layout,
    niche,
    lead: {
      ...base.lead,
      nicheId,
      category: nicheDef.label,
    },
    display: {
      ...base.display,
      about:
        base.lead.about ||
        `${base.lead.businessName} provides trusted ${niche.label.toLowerCase()} in ${base.lead.cityArea}.`,
      whatsappLink: base.display.hasWhatsApp
        ? base.display.whatsappLink.replace(
            /text=[^&]*/,
            `text=${encodeURIComponent(nicheDef.whatsappPreset)}`
          )
        : "",
    },
  };
}
