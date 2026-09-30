import { PageChrome } from "@/components/PageChrome";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { AboutPreview } from "@/components/AboutPreview";
import { TrustBar } from "@/components/TrustBar";
import { Features } from "@/components/Features";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { resolveSite } from "@/lib/resolve-site";

type Props = { searchParams?: Promise<{ niche?: string }> };

export default async function AboutPage({ searchParams }: Props) {
  const site = await resolveSite(searchParams);
  return (
    <PageChrome site={site}>
      <PageHero
        site={site}
        kicker="Our story"
        title={`About ${site.lead.businessName}`}
        subtitle={site.niche.tagline}
      />
      <AboutPreview site={site} full />
      <TrustBar site={site} />
      <Features site={site} />
      <Reviews site={site} />
      <FAQ site={site} />
      <CtaBanner site={site} />
    </PageChrome>
  );
}
