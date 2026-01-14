"use client";

import { useState } from "react";
import type { Language } from "../LandingPage";

type ContactProps = {
  lang: Language;
};

export function Contact({ lang }: ContactProps) {
  const isDe = lang === "de";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setSuccessMsg(
        isDe
          ? "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet."
          : "Thank you! Your request has been sent successfully."
      );
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setErrorMsg(
        isDe
          ? "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          : "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-b border-slate-800/60 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {isDe ? "Kontakt" : "Contact"}
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              {isDe
                ? "Beschreiben Sie kurz Ihr Projekt. Wir melden uns in der Regel innerhalb von 24 Stunden."
                : "Briefly describe your project. We usually respond within 24 hours."}
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    {isDe ? "Name" : "Name"}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-amber-400"
                    placeholder={isDe ? "Ihr Name" : "Your name"}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    {isDe ? "Telefon" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-amber-400"
                    placeholder={isDe ? "z.B. +49..." : "e.g. +49..."}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-amber-400"
                  placeholder={
                    isDe ? "Ihre E-Mail-Adresse" : "Your email address"
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300">
                  {isDe ? "Projektbeschreibung" : "Project Description"}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-amber-400"
                  placeholder={
                    isDe
                      ? "z.B. Badsanierung, ca. 8 m², alte Fliesen entfernen, neue Dusche einbauen..."
                      : "e.g. Bathroom renovation, approx. 8 m², remove old tiles, install new shower..."
                  }
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? isDe
                    ? "Wird gesendet..."
                    : "Sending..."
                  : isDe
                  ? "Anfrage senden"
                  : "Send Request"}
              </button>

              {successMsg && (
                <p className="mt-2 text-xs text-emerald-400">{successMsg}</p>
              )}
              {errorMsg && (
                <p className="mt-2 text-xs text-red-400">{errorMsg}</p>
              )}

              <p className="mt-2 text-[11px] text-slate-500">
                {isDe
                  ? "Hinweis: Das Formular dient als einfache Kontaktanfrage. Wir speichern Ihre Daten nur zur Bearbeitung Ihrer Anfrage."
                  : "Note: This form serves as a simple contact request. We store your data only to process your request."}
              </p>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/80 p-4 text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {isDe ? "Direkter Kontakt" : "Direct Contact"}
              </h3>
              <div className="mt-3 space-y-2 text-slate-200">
                <p>
                  <span className="block text-xs text-slate-400">
                    {isDe ? "Telefon" : "Phone"}
                  </span>
                  <a
                    href="tel:+4917673954858"
                    className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                  >
                    +49 (0) 176 73954858
                  </a>
                </p>
                <p>
                  <span className="block text-xs text-slate-400">E-mail</span>
                  <a
                    href="mailto:Dienstleistung.Ziba@hotmail.com"
                    className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                  >
                    Dienstleistung.Ziba@hotmail.com
                  </a>
                </p>
                <p>
                  <span className="block text-xs text-slate-400">Address</span>
                  <a
                    className="text-sm font-semibold text-amber-300 hover:text-amber-200 cursor-default"
                  >
                    78239 Rielasingen-Worblingen, Germany
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/80 p-4 text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {isDe ? "Arbeitszeiten" : "Working Hours"}
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                {isDe
                  ? "Mo–Fr: 08:00–18:00 · Sa nach Vereinbarung"
                  : "Mon–Fri: 08:00–18:00 · Sat by arrangement"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/80 p-4 text-xs text-slate-300">
              {isDe ? (
                <p>
                  Am schnellsten erreichen Sie uns telefonisch oder per
                  WhatsApp. Gerne können Sie auch direkt Bilder mitschicken.
                </p>
              ) : (
                <p>
                  Reach us fastest by phone or WhatsApp. Feel free to send photos directly.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
