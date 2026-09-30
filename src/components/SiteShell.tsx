import type { ReactNode } from "react";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { EmergencyBand } from "./EmergencyBand";
import { Services } from "./Services";
import { Features } from "./Features";
import {
  MenuHighlights,
  ClassesBand,
  BeforeAfter,
  Portfolio,
  Consultation,
  Delivery,
  Warranty,
} from "./SpecialSections";
import { Gallery } from "./Gallery";
import { Packages } from "./Packages";
import { Reviews } from "./Reviews";
import { BookingForm } from "./BookingForm";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { AboutPreview } from "./AboutPreview";
import type { SiteModel } from "@/config/site";
import type { LayoutId } from "@/config/layouts";

export function SiteShell({ site }: { site: SiteModel }) {
  return (
    <>
      <Hero site={site} />
      {renderLayoutSections(site)}
    </>
  );
}

function End({ site }: { site: SiteModel }) {
  return (
    <>
      <Reviews site={site} />
      <BookingForm site={site} />
      <FAQ site={site} />
      <Contact site={site} />
    </>
  );
}

function renderLayoutSections(site: SiteModel): ReactNode {
  const layout: LayoutId = site.layout.id;

  const recipes: Record<LayoutId, ReactNode> = {
    emergency: (
      <>
        <TrustBar site={site} />
        <EmergencyBand site={site} />
        <Services site={site} />
        <Warranty site={site} />
        <Features site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <End site={site} />
      </>
    ),
    craft: (
      <>
        <Portfolio site={site} />
        <Services site={site} />
        <BeforeAfter site={site} />
        <Gallery site={site} />
        <Features site={site} />
        <Packages site={site} />
        <End site={site} />
      </>
    ),
    clean: (
      <>
        <TrustBar site={site} />
        <Services site={site} />
        <Features site={site} />
        <Warranty site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <End site={site} />
      </>
    ),
    tech: (
      <>
        <Services site={site} />
        <Features site={site} />
        <Warranty site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <Consultation site={site} />
        <End site={site} />
      </>
    ),
    beauty: (
      <>
        <Services site={site} />
        <BeforeAfter site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <Features site={site} />
        <Consultation site={site} />
        <End site={site} />
      </>
    ),
    barber: (
      <>
        <Services site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <TrustBar site={site} />
        <End site={site} />
      </>
    ),
    spa: (
      <>
        <Services site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <Features site={site} />
        <Consultation site={site} />
        <End site={site} />
      </>
    ),
    bridal: (
      <>
        <Portfolio site={site} />
        <Services site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <Consultation site={site} />
        <End site={site} />
      </>
    ),
    clinic: (
      <>
        <TrustBar site={site} />
        <Services site={site} />
        <Consultation site={site} />
        <Features site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <End site={site} />
      </>
    ),
    gym: (
      <>
        <Services site={site} />
        <ClassesBand site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <Features site={site} />
        <End site={site} />
      </>
    ),
    restaurant: (
      <>
        <MenuHighlights site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <Delivery site={site} />
        <AboutPreview site={site} />
        <Features site={site} />
        <TrustBar site={site} />
        <End site={site} />
      </>
    ),
    cafe: (
      <>
        <MenuHighlights site={site} />
        <Gallery site={site} />
        <Packages site={site} />
        <Features site={site} />
        <End site={site} />
      </>
    ),
    kitchen: (
      <>
        <MenuHighlights site={site} />
        <Delivery site={site} />
        <Packages site={site} />
        <Features site={site} />
        <End site={site} />
      </>
    ),
    hotel: (
      <>
        <Gallery site={site} />
        <Packages site={site} />
        <Features site={site} />
        <Consultation site={site} />
        <End site={site} />
      </>
    ),
    workshop: (
      <>
        <EmergencyBand site={site} />
        <Services site={site} />
        <BeforeAfter site={site} />
        <Warranty site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <Features site={site} />
        <End site={site} />
      </>
    ),
    transport: (
      <>
        <Services site={site} />
        <Features site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <TrustBar site={site} />
        <End site={site} />
      </>
    ),
    campus: (
      <>
        <ClassesBand site={site} />
        <Packages site={site} />
        <Services site={site} />
        <Consultation site={site} />
        <Features site={site} />
        <Gallery site={site} />
        <End site={site} />
      </>
    ),
    arts: (
      <>
        <Portfolio site={site} />
        <ClassesBand site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <Services site={site} />
        <End site={site} />
      </>
    ),
    firm: (
      <>
        <TrustBar site={site} />
        <Consultation site={site} />
        <Features site={site} />
        <Services site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <End site={site} />
      </>
    ),
    property: (
      <>
        <Portfolio site={site} />
        <Services site={site} />
        <Consultation site={site} />
        <Features site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <End site={site} />
      </>
    ),
    events: (
      <>
        <Portfolio site={site} />
        <Services site={site} />
        <Packages site={site} />
        <Gallery site={site} />
        <Consultation site={site} />
        <Features site={site} />
        <End site={site} />
      </>
    ),
    shop: (
      <>
        <Services site={site} />
        <Portfolio site={site} />
        <Delivery site={site} />
        <Packages site={site} />
        <Warranty site={site} />
        <Gallery site={site} />
        <Features site={site} />
        <End site={site} />
      </>
    ),
  };

  return recipes[layout] || recipes.emergency;
}
