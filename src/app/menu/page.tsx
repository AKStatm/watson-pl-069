import { PageChrome } from "@/components/PageChrome";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { MenuHighlights } from "@/components/SpecialSections";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { Delivery } from "@/components/SpecialSections";
import { BookingForm } from "@/components/BookingForm";
import { resolveSite } from "@/lib/resolve-site";

type Props = { searchParams?: Promise<{ niche?: string }> };

export default async function MenuPage({ searchParams }: Props) {
  const site = await resolveSite(searchParams);
  const stay = site.niche.id === "hotel" || site.niche.id === "homestay";

  return (
    <PageChrome site={site}>
      <PageHero
        site={site}
        kicker={stay ? "Stay options" : "Menu"}
        title={stay ? "Rooms & packages" : `${site.lead.businessName} menu`}
        subtitle={
          stay
            ? `Reserve a stay in ${site.lead.cityArea}. WhatsApp your dates.`
            : `Favourites, family deals and order-on-WhatsApp for ${site.lead.cityArea}.`
        }
      />
      <MenuHighlights site={site} force />
      <Services site={site} />
      <Delivery site={site} />
      <Packages site={site} />
      <BookingForm site={site} />
      <CtaBanner site={site} />
    </PageChrome>
  );
}
