import { PageChrome } from "@/components/PageChrome";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { BookingForm } from "@/components/BookingForm";
import { FAQ } from "@/components/FAQ";
import { resolveSite } from "@/lib/resolve-site";

type Props = { searchParams?: Promise<{ niche?: string }> };

export default async function ServicesPage({ searchParams }: Props) {
  const site = await resolveSite(searchParams);
  return (
    <PageChrome site={site}>
      <PageHero
        site={site}
        kicker={site.niche.label}
        title={site.niche.servicesTitle}
        subtitle={`Every ${site.niche.label.toLowerCase()} option for ${site.lead.cityArea} — prices, photos, and WhatsApp booking.`}
      />
      <Services site={site} />
      <Features site={site} />
      <BookingForm site={site} />
      <FAQ site={site} />
      <CtaBanner site={site} />
    </PageChrome>
  );
}
