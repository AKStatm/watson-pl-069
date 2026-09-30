"use client";

import { Rate } from "antd";
import { FaQuoteLeft } from "react-icons/fa";
import type { SiteModel } from "@/config/site";
import type { NicheFamily } from "@/config/types";

function buildReviews(site: SiteModel) {
  const city = (site.lead.cityArea || "Lahore").split(",")[0];
  const name = site.lead.businessName;
  const L = site.niche.label.toLowerCase();
  const byFamily: Record<NicheFamily, { name: string; text: string }[]> = {
    "home-services": [
      { name: "Ahmed R.", text: `Came the same day for our ${L} job. ${name} was clear on WhatsApp and left everything tidy.` },
      { name: "Sana K.", text: `Honest estimate before starting. Would book again in ${city}.` },
      { name: "Usman M.", text: `Fast response and neat finishing. Exactly what we needed.` },
    ],
    beauty: [
      { name: "Hina S.", text: `Loved my look — hygienic station and on-time slot at ${name}.` },
      { name: "Ayesha M.", text: `Bridal trial was calm and professional. Photos came out beautiful.` },
      { name: "Rabia K.", text: `Booked on WhatsApp in minutes. Will return for the next event.` },
    ],
    health: [
      { name: "Imran T.", text: `Clear explanation and a proper plan. Felt looked after at ${name}.` },
      { name: "Nadia F.", text: `Appointment confirmed quickly. Staff were kind and on time.` },
      { name: "Omar J.", text: `Would recommend for anyone in ${city} looking for ${L} care.` },
    ],
    food: [
      { name: "Bilal A.", text: `Food was hot, flavourful, and the family platter was generous.` },
      { name: "Fatima Z.", text: `Booked a table on WhatsApp — no wait. Great for ${city} weekends.` },
      { name: "Hassan P.", text: `${name} is our go-to now. Clean dining and quick service.` },
    ],
    auto: [
      { name: "Zain M.", text: `Diagnosed the issue honestly and finished on time. Fair pricing.` },
      { name: "Sara L.", text: `WhatsApp updates while the car was in the bay. Stress-free.` },
      { name: "Ali N.", text: `Solid ${L} work — I'll keep coming back in ${city}.` },
    ],
    education: [
      { name: "Parent — A.K.", text: `Teachers are patient and progress is visible. Happy we enrolled.` },
      { name: "Student — M.S.", text: `Small batch, clear notes, and extra help before exams.` },
      { name: "Parent — R.B.", text: `Trial class sold us. ${name} is organised and friendly.` },
    ],
    professional: [
      { name: "Kamran D.", text: `Consult was practical, not salesy. Documents handled quickly.` },
      { name: "Mehwish R.", text: `Clear next steps after the first meeting. Highly recommend ${name}.` },
      { name: "Tariq H.", text: `Professional, confidential, and easy to reach on WhatsApp.` },
    ],
    retail: [
      { name: "Iqra N.", text: `Helped me pick the right piece and reserved it for pickup.` },
      { name: "Danish Q.", text: `Quality was as shown. Easy WhatsApp order from ${city}.` },
      { name: "Laiba S.", text: `Lovely collection — I'll be back for gifts.` },
    ],
  };
  return byFamily[site.niche.family];
}

export function Reviews({ site }: { site: SiteModel }) {
  const reviews = buildReviews(site);

  return (
    <section id="reviews" className="section">
      <div className="container-pad">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Social proof
            </div>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              What customers say
            </h2>
          </div>
          {site.display.hasRating ? (
            <div className="card-surface inline-flex items-center gap-3 px-4 py-3">
              <div>
                <div className="font-display text-2xl font-bold">{site.display.rating.toFixed(1)}</div>
                <Rate disabled allowHalf defaultValue={site.display.rating} className="!text-sm" />
              </div>
              <div className="text-sm text-[var(--muted)]">
                {site.display.hasReviews ? `${site.display.reviewCount}+ Google reviews` : "Rated locally"}
              </div>
            </div>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="card-surface p-5">
              <FaQuoteLeft className="text-[var(--primary)] opacity-70" />
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]">{review.text}</p>
              <div className="mt-4 text-sm font-semibold">{review.name}</div>
              <div className="text-xs text-[var(--muted)]">Local customer · {site.lead.cityArea.split(",")[0]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
