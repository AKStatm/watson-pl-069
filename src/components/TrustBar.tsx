import {
  FiAward,
  FiClock,
  FiMapPin,
  FiMessageCircle,
  FiShield,
  FiThumbsUp,
} from "react-icons/fi";
import type { SiteModel } from "@/config/site";

const icons = [FiShield, FiClock, FiThumbsUp, FiAward, FiMapPin, FiMessageCircle];

export function TrustBar({ site }: { site: SiteModel }) {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="container-pad grid grid-cols-2 gap-4 py-6 md:grid-cols-4">
        {site.niche.trustPoints.slice(0, 4).map((point, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={point} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                style={{ background: "var(--soft)", color: "var(--primary)" }}
              >
                <Icon className="text-lg" />
              </span>
              <div>
                <div className="text-sm font-semibold">{point}</div>
                <div className="text-xs text-[var(--muted)]">Trusted locally in {site.lead.cityArea.split(",")[0]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
