import { PageChrome } from "@/components/PageChrome";
import { SiteShell } from "@/components/SiteShell";
import { resolveSite } from "@/lib/resolve-site";

type Props = {
  searchParams?: Promise<{ niche?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const site = await resolveSite(searchParams);
  return (
    <PageChrome site={site}>
      <SiteShell site={site} />
    </PageChrome>
  );
}
