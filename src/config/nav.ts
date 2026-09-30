import type { NicheFamily, NicheId } from "./types";
import type { SiteModel } from "./site";

export type NavLink = { href: string; label: string };

export function withNiche(href: string, site: Pick<SiteModel, "preview" | "niche">) {
  if (!site.preview) return href;
  const join = href.includes("?") ? "&" : "?";
  return `${href}${join}niche=${site.niche.id}`;
}

export function getNavLinks(family: NicheFamily, nicheId: NicheId): NavLink[] {
  if (family === "food") {
    const menuLabel =
      nicheId === "hotel" || nicheId === "homestay" ? "Stay" : "Menu";
    return [
      { href: "/", label: "Home" },
      { href: "/menu", label: menuLabel },
      { href: "/gallery", label: "Gallery" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ];
  }

  if (family === "beauty") {
    return [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/gallery", label: "Looks" },
      { href: "/packages", label: "Packages" },
      { href: "/contact", label: "Book" },
    ];
  }

  if (family === "health") {
    return [
      { href: "/", label: "Home" },
      { href: "/services", label: "Care" },
      { href: "/packages", label: "Plans" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Appoint" },
    ];
  }

  if (family === "retail") {
    return [
      { href: "/", label: "Home" },
      { href: "/services", label: "Shop" },
      { href: "/gallery", label: "Collection" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Visit" },
    ];
  }

  if (family === "education") {
    return [
      { href: "/", label: "Home" },
      { href: "/services", label: "Courses" },
      { href: "/packages", label: "Fees" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Enroll" },
    ];
  }

  if (family === "professional") {
    return [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "Firm" },
      { href: "/packages", label: "Plans" },
      { href: "/contact", label: "Consult" },
    ];
  }

  if (family === "auto") {
    return [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/packages", label: "Packages" },
      { href: "/gallery", label: "Workshop" },
      { href: "/contact", label: "Book bay" },
    ];
  }

  return [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
}
