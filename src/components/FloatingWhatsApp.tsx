import { FaWhatsapp } from "react-icons/fa";
import type { SiteModel } from "@/config/site";

export function FloatingWhatsApp({ site }: { site: SiteModel }) {
  if (!site.display.hasWhatsApp) return null;

  return (
    <a href={site.display.whatsappLink} className="floating-wa" aria-label="Chat on WhatsApp">
      <FaWhatsapp className="text-2xl" />
      <span>WhatsApp</span>
    </a>
  );
}
