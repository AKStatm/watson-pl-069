import { PageChrome } from "@/components/PageChrome";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import { BookingForm } from "@/components/BookingForm";
import { FAQ } from "@/components/FAQ";
import { resolveSite } from "@/lib/resolve-site";

type Props = { searchParams?: Promise<{ niche?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const site = await resolveSite(searchParams);
  return (
    <PageChrome site={site}>
      <PageHero
        site={site}
        kicker="Get in touch"
        title={site.niche.bookingLabel}
        subtitle={`${site.lead.address || site.lead.cityArea}. ${
          site.display.hasWhatsApp ? "WhatsApp is the fastest way to confirm." : "Use the form and we will follow up."
        }`}
      />
      <BookingForm site={site} />
      <Contact site={site} />
      <FAQ site={site} />
    </PageChrome>
  );
}
