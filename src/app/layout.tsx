import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getSiteModel } from "@/config/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const site = getSiteModel();

export const metadata: Metadata = {
  title: `${site.lead.businessName} | ${site.niche.label} in ${site.lead.cityArea}`,
  description: site.niche.heroSubtitle,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <Providers theme={site.theme}>{children}</Providers>
      </body>
    </html>
  );
}
