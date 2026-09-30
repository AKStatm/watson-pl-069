"use client";

import { Collapse } from "antd";
import type { SiteModel } from "@/config/site";

export function FAQ({ site }: { site: SiteModel }) {
  return (
    <section className="section" id="faq">
      <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">FAQ</div>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">Common questions</h2>
          <p className="mt-2 text-[var(--muted)]">
            Niche-specific answers for {site.niche.label.toLowerCase()} customers.
          </p>
        </div>
        <Collapse
          bordered={false}
          className="!bg-transparent"
          items={site.niche.faqs.map((faq, index) => ({
            key: String(index),
            label: <span className="font-semibold">{faq.q}</span>,
            children: <p className="text-[var(--muted)]">{faq.a}</p>,
            className: "card-surface !mb-3 !overflow-hidden !border-0",
          }))}
        />
      </div>
    </section>
  );
}
