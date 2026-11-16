"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Input, NativeSelect, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "sending" | "sent" | "emailed" | "error";

/*
  Booking and contact form. With NEXT_PUBLIC_FORM_ENDPOINT set it
  posts JSON there. Without it, it opens the visitor's email app with
  the request already written, addressed to the clinic.
*/
export function RequestForm({ kind }: { kind: "booking" | "message" }) {
  const [status, setStatus] = useState<Status>("idle");
  const booking = kind === "booking";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.company) return; // honeypot: bots fill hidden fields

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ kind, ...data }),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    const lines = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      booking && `Patient type: ${data.patientType}`,
      booking && `Reason for visit: ${data.reason}`,
      booking && `Preferred days and times: ${data.preferred || "Any"}`,
      "",
      data.message,
    ].filter((l) => l !== false);
    const subject = booking ? "Booking request" : "Message from the website";
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("emailed");
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl bg-foam p-8">
        <CircleCheck aria-hidden className="size-10 text-hive" />
        <h2 className="mt-4 text-2xl font-bold">
          {booking ? "Request sent" : "Message sent"}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {booking
            ? "We'll call or email you during clinic hours to confirm a time. Your appointment isn't booked until you hear from us."
            : "We'll reply during clinic hours."}{" "}
          If it&rsquo;s urgent, call {site.phone}.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      {booking && (
        <>
          <div>
            <Label htmlFor="patientType">Have you visited us before?</Label>
            <NativeSelect id="patientType" name="patientType" defaultValue="New patient">
              <option>New patient</option>
              <option>Returning patient</option>
            </NativeSelect>
          </div>
          <div>
            <Label htmlFor="reason">Reason for visit</Label>
            <NativeSelect id="reason" name="reason" defaultValue="Checkup and cleaning">
              <option>Checkup and cleaning</option>
              {services.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
              <option>Something else</option>
            </NativeSelect>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="preferred">Days and times that suit you</Label>
            <Input
              id="preferred"
              name="preferred"
              placeholder="For example: weekday mornings, or Thursday after 3"
            />
          </div>
        </>
      )}

      <div className="sm:col-span-2">
        <Label htmlFor="message">
          {booking ? "Anything we should know? (optional)" : "Your message"}
        </Label>
        <Textarea id="message" name="message" required={!booking} />
        <p className="mt-1.5 text-sm text-muted-foreground">
          Please don&rsquo;t include detailed health information here. We&rsquo;ll ask at your visit.
        </p>
      </div>

      {/* Honeypot field, hidden from people. */}
      <div aria-hidden className="hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="accent" size="lg" disabled={status === "sending"}>
          {status === "sending"
            ? "Sending…"
            : booking
              ? "Send booking request"
              : "Send message"}
        </Button>

        <div aria-live="polite" className="mt-4 max-w-prose text-[0.95rem]">
          {status === "emailed" && (
            <p className="rounded-lg bg-foam p-4">
              Your email app should have opened with your request filled in. Press send there to
              finish. If nothing opened, email {site.email} or call {site.phone}.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg bg-[#fdecea] p-4 text-destructive">
              Your request didn&rsquo;t go through. Check your connection and try again, or call{" "}
              {site.phone}.
            </p>
          )}
          {status === "idle" && booking && (
            <p className="text-muted-foreground">
              This is a request, not a confirmed appointment. We&rsquo;ll contact you to confirm a
              time.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
