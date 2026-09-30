import { PageChrome } from "@/components/PageChrome";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { Packages } from "@/components/Packages";
import { Features } from "@/components/Features";
import { BookingForm } from "@/components/BookingForm";
import { resolveSite } from "@/lib/resolve-site";

type Props = { searchParams?: Promise<{ niche?: string }> };

export default async function PackagesPage({ searchParams }: Props) {
  const site = await resolveSite(searchParams);
  return (
    <PageChrome site={site}>
      <PageHero
        site={site}
        kicker="Packages"
        title="Clear packages that help close"
        subtitle="Starter to premium — customers understand value before they message you."
      />
      <Packages site={site} />
      <Features site={site} />
      <BookingForm site={site} />
      <CtaBanner site={site} />
    </PageChrome>
  );
}
