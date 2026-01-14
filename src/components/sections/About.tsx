"use client";

import type { Language } from "../LandingPage";

const title = {
  de: "Über Dienstleistung Ziba",
  en: "About Dienstleistung Ziba",
} as const;

const paragraph = {
  de: `Dienstleistung Ziba ist ein kleines, familiengeführtes Unternehmen mit Sitz in Singen. Wir haben uns auf Fliesenarbeiten, Badsanierung, Bodenleger und Trockenbau spezialisiert. Qualität, Sauberkeit und ein respektvoller Umgang mit Ihrem Zuhause stehen für uns an erster Stelle.`,
  en: `Dienstleistung Ziba is a small, family-run business based in Singen. We specialize in tile work, bathroom renovations, flooring services and Drywall Construction. Quality, cleanliness, and respectful treatment of your home are our top priorities.`,
} as const;

type AboutProps = {
  lang: Language;
};

export function About({ lang }: AboutProps) {
  return (
    <section
      id="about"
      className="border-b border-slate-800/60 bg-slate-950/95"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
          {/* Text */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title[lang]}
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              {paragraph[lang]}
            </p>
          </div>

          {/* Facts / service area */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {lang === "de" ? "Einsatzgebiet" : "Service Area"}
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                {lang === "de"
                  ? "Region Singen und Umgebung."
                  : "Region Singen and surrounding area."}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {lang === "de" ? "Sprachen" : "Languages"}
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                {lang === "de"
                  ? "Wir sprechen Deutsch,Englisch,Albanisch,Macedonisch – ideal für zweisprachige Haushalte."
                  : "We speak German,English,Albanian,Macedonian – ideal for bilingual households."}
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
