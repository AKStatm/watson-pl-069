"use client";

import { useState } from "react";
import { DatePicker, Input, Select } from "antd";
import { Button, Text, Title } from "rizzui";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import type { SiteModel } from "@/config/site";
import dayjs from "dayjs";

export function BookingForm({ site }: { site: SiteModel }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(site.niche.services[0]?.title);
  const [area, setArea] = useState(site.lead.cityArea);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);

  const submit = () => {
    if (!name.trim() || !phone.trim()) {
      toast.error("Please enter your name and phone number");
      return;
    }

    const when = date ? date.format("DD MMM YYYY") : "ASAP";
    const message = `${site.niche.whatsappPreset}
Name: ${name}
Phone: ${phone}
Service: ${service}
Area: ${area}
Preferred date: ${when}
Notes: ${notes || "-"}
Lead: ${site.lead.leadId}`;

    if (!site.display.hasWhatsApp) {
      toast.success("Request captured for this demo. Add a WhatsApp number in lead data to send live.");
      return;
    }

    toast.success("Opening WhatsApp with your booking details…");
    window.open(
      `https://wa.me/${normalizeWa(site.lead.whatsapp || site.lead.phone || "")}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="book" className="section bg-white">
      <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Book in 30 seconds
          </div>
          <Title as="h2" className="font-display !mt-2 !text-3xl !font-bold sm:!text-4xl">
            {site.niche.bookingLabel}
          </Title>
          <Text className="mt-3 !text-[var(--muted)]">
            Fill this form and we open WhatsApp with a ready message for{" "}
            <strong>{site.lead.businessName}</strong>.
          </Text>

          <div className="mt-6 space-y-3">
            {["Pick service", "Share area & time", "Confirm on WhatsApp"].map((step, i) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl bg-[var(--soft)] px-4 py-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium">
              Your name
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ali Khan" size="large" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Phone / WhatsApp
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03XX XXXXXXX"
                size="large"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
              Service
              <Select
                size="large"
                value={service}
                onChange={setService}
                options={site.niche.services.map((s) => ({ value: s.title, label: s.title }))}
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Area
              <Input value={area} onChange={(e) => setArea(e.target.value)} size="large" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Preferred date
              <DatePicker
                size="large"
                className="w-full"
                value={date}
                onChange={(v) => setDate(v)}
                disabledDate={(d) => d && d < dayjs().startOf("day")}
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
              Notes
              <Input.TextArea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe the job, unit count, guests, etc."
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button
              className="!h-12 !rounded-full !bg-[var(--primary)] !px-6 !font-semibold hover:!bg-[var(--primary-dark)]"
              onClick={submit}
            >
              {site.display.hasWhatsApp ? (
                <>
                  <FaWhatsapp className="mr-2" /> Send on WhatsApp
                </>
              ) : (
                "Request booking"
              )}
            </Button>
            {site.display.hasPhone ? (
              <a href={`tel:${site.lead.phone || site.lead.whatsapp}`} className="btn-secondary">
                Call {site.display.phoneDisplay}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function normalizeWa(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = `92${digits.slice(1)}`;
  if (digits.length === 10) digits = `92${digits}`;
  return digits;
}
