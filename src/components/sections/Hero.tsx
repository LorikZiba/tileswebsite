"use client";

import type { Language } from "../LandingPage";
import Image from "next/image";

const heroText = {
  de: {
    badge: "Fliesenarbeiten · Badsanierung · Bodenleger · Trockenbau",
    title: "Fliesenarbeiten mit Präzision und Vertrauen.",
    subtitle:
      "Badsanierung, Bödenleger,Trockenbau, Terrassen und mehr – zuverlässig im Raum Deutschland. Wir sprechen Deutsch,Albanisch,Mazedonisch und Englisch.",
    primaryCta: "Kostenlose Beratung anfragen",
    secondaryCta: "Direkt anrufen",
    helper: "Termine auch abends und am Wochenende möglich.",
  },
  en: {
    badge: "Tile Work · Bathroom Renovation · Flooring Installation · Drywall",
    title: "Tile Work with Precision and Trust.",
    subtitle:
      "Bathroom renovation, flooring, drywall, terraces and more – reliable throughout Germany. We speak German,Albanian,Macedonian and English.",
    primaryCta: "Request Free Consultation",
    secondaryCta: "Call Directly",
    helper: "Appointments available in the evenings and on weekends.",
  },
} as const;

type HeroProps = {
  lang: Language;
};

export function Hero({ lang }: HeroProps) {
  const t = heroText[lang];

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/60 bg-linear-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[120%] -translate-x-1/2 rounded-l-full bg-slate-900/70 md:block" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center md:py-20">
        {/* Text side */}
        <div className="relative z-10 w-full md:w-1/2">
          <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
            {t.badge}
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.title}
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-400"
            >
              {t.primaryCta}
            </a>
            <a
              href="tel:+4917673954858"
              className="inline-flex justify-center rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-400 hover:text-amber-300"
            >
              {t.secondaryCta}
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">{t.helper}</p>
        </div>

        {/* Image side */}
        <div className="relative z-10 w-full md:w-1/2">
          <div className="relative mx-auto h-72 max-w-md overflow-hidden rounded-[2.5rem] border border-slate-700/60 bg-slate-900/80 shadow-2xl md:h-80">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

            <Image
              src="/images/tiles-hero.jpg"
              alt="Beispiel für professionell verlegte Fliesen"
              fill
              priority
              className="object-cover"
            />

            {/* label at bottom */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-slate-950/70 px-3 py-2 text-xs text-slate-200 backdrop-blur">
              <span>
                Fliesenleger-Meisterservice
                <span className="hidden sm:inline"> · Dienstleistung Ziba</span>
              </span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                Saubere Ausführung
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
