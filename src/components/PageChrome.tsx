import type { CSSProperties, ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { NichePreviewBar } from "@/components/NichePreviewBar";
import type { SiteModel } from "@/config/site";

export function PageChrome({ site, children }: { site: SiteModel; children: ReactNode }) {
  const cssVars = {
    "--primary": site.theme.primary,
    "--primary-dark": site.theme.primaryDark,
    "--secondary": site.theme.secondary,
    "--accent": site.theme.accent,
    "--soft": site.theme.soft,
    "--surface": site.theme.surface,
    "--ink": site.theme.ink,
    "--muted": site.theme.muted,
    "--gradient": site.theme.gradient,
  } as CSSProperties;

  return (
    <div style={cssVars} className="min-h-screen">
      {site.preview ? <NichePreviewBar current={site.niche.id} /> : null}
      <Header site={site} />
      <main>{children}</main>
      <Footer site={site} />
      <FloatingWhatsApp site={site} />
    </div>
  );
}
