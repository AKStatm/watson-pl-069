"use client";

import Link from "next/link";
import { Select } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { listNiches } from "@/config/niches";
import type { NicheId } from "@/config/types";

const niches = listNiches();

export function NichePreviewBar({ current }: { current: NicheId }) {
  const router = useRouter();
  const pathname = usePathname();
  const quick = niches.slice(0, 12);
  const go = (id: NicheId) => router.push(`${pathname}?niche=${id}`);

  return (
    <div className="border-b border-black/10 bg-[#111827] text-white">
      <div className="container-pad flex flex-col gap-3 py-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs font-medium text-white/70">
            Demo preview · each family has a different layout ({niches.length} niches)
          </div>
          <div className="flex items-center gap-2">
            <Select
              showSearch
              size="middle"
              className="niche-select min-w-[180px] flex-1 sm:min-w-[220px]"
              value={current}
              optionFilterProp="label"
              options={niches.map((n) => ({ value: n.id, label: `${n.label} (${n.family})` }))}
              onChange={(value: NicheId) => go(value)}
              popupMatchSelectWidth={false}
            />
            <Link
              href="/niches"
              className="whitespace-nowrap rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-900"
            >
              All niches
            </Link>
          </div>
        </div>

        <div className="hidden gap-2 overflow-x-auto pb-1 md:flex">
          {quick.map((n) => {
            const active = current === n.id;
            return (
              <Link
                key={n.id}
                href={`${pathname}?niche=${n.id}`}
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${
                  active ? "niche-chip-active" : "niche-chip"
                }`}
                style={
                  active
                    ? { background: "#ffffff", color: "#0f172a" }
                    : { background: "rgba(255,255,255,0.12)", color: "#ffffff" }
                }
              >
                {n.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
