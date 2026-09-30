import { PageChrome } from "@/components/PageChrome";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { BeforeAfter, Portfolio } from "@/components/SpecialSections";
import { resolveSite } from "@/lib/resolve-site";

type Props = { searchParams?: Promise<{ niche?: string }> };

export default async function GalleryPage({ searchParams }: Props) {
  const site = await resolveSite(searchParams);
  return (
    <PageChrome site={site}>
      <PageHero
        site={site}
        kicker="Gallery"
        title={`See ${site.niche.label.toLowerCase()} work`}
        subtitle={`Photos styled for ${site.lead.businessName} — the demo never shows broken or empty frames.`}
      />
      <Gallery site={site} />
      <BeforeAfter site={site} />
      <Portfolio site={site} />
      <CtaBanner site={site} />
    </PageChrome>
  );
}
