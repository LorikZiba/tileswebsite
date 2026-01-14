"use client";

import type { Language } from "../LandingPage";

type Benefit = {
  key: string;
  title: { de: string; en: string };
  desc: { de: string; en: string };
};

const benefits: Benefit[] = [
  {
    key: "experience",
    title: {
      de: "Erfahrung im Fliesenhandwerk",
      en: "Experience in Tiling",
    },
    desc: {
      de: "Über mehrere Jahre Erfahrung in Badsanierung, Bodenfliesen und Außenbereichen.",
      en: "Several years of experience in bathroom renovation, floor tiling, and outdoor areas.",
    },
  },
  {
    key: "quality",
    title: {
      de: "Saubere und präzise Ausführung",
      en: "Clean and Precise Work",
    },
    desc: {
      de: "Wir arbeiten sorgfältig, schützen Ihre Räume und hinterlassen die Baustelle ordentlich.",
      en: "We work carefully, protect your spaces, and leave the site tidy.",
    },
  },
  {
    key: "transparent",
    title: {
      de: "Transparente Preise",
      en: "Transparent Pricing",
    },
    desc: {
      de: "Klare Angebote ohne versteckte Kosten. Sie wissen im Voraus, womit Sie rechnen können.",
      en: "Clear offers without hidden costs. You know in advance what to expect.",
    },
  },
  {
    key: "languages",
    title: {
      de: "Deutsch,Englisch,Albanisch und Macedonisch",
      en: "German,English,Albanian and Macedonian",
    },
    desc: {
      de: "Wir sprechen Ihre Sprache – Kommunikation auf Deutsch,Englisch,Albanisch und Macedonisch ohne Missverständnisse.",
      en: "We speak your language – communication in German,English,Albanian and Macedonian without misunderstandings.",
    },
  },
];

const sectionTitle = {
  de: "Warum mit uns arbeiten?",
  en: "Why work with us?",
} as const;

const sectionSubtitle = {
  de: "Wir verbinden saubere Handwerksarbeit mit zuverlässiger Kommunikation und fairen Preisen.",
  en: "We combine clean craftsmanship with reliable communication and fair prices.",
} as const;

type WhyUsProps = {
  lang: Language;
};

export function WhyUs({ lang }: WhyUsProps) {
  return (
    <section
      id="why-us"
      className="border-b border-slate-800/60 bg-slate-950/95"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
          {/* Left: text intro */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {sectionTitle[lang]}
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              {sectionSubtitle[lang]}
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-emerald-100 sm:text-sm">
              {lang === "de" ? (
                <p>
                  <span className="font-semibold">Hinweis:</span> Wir arbeiten
                  wie ein klassischer Meisterbetrieb – kurze Wege, direkte
                  Kommunikation und ein fester Ansprechpartner für Ihr Projekt.
                </p>
              ) : (
                <p>
                  <span className="font-semibold">Note:</span> We work like a classic master craftsman business – direct communication and a single contact person for your project.
                </p>
              )}
            </div>
          </div>

          {/* Right: benefits grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.key}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 text-sm shadow-[0_18px_40px_-22px_rgba(15,23,42,1)]"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {benefit.title[lang]}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {benefit.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
