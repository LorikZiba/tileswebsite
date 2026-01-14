"use client";

import BeforeAfterSlider from "../BeforeAfterSlider";

const title = {
  de: "Renovierungen & Beispiele",
  en: "Renovations & Examples",
} as const;

const paragraph = {
  de: `Hier sehen Sie echte Vorher-Nachher-Beispiele unserer Arbeiten. Ob Badsanierung, neue Bodenfliesen oder kleine Renovierungen – wir arbeiten sauber, präzise und mit Blick fürs Detail.`,
  en: `Here you can see real before-and-after examples of our work. Whether it’s bathroom renovations, new floor tiles, or small refurbishments – we work cleanly, precisely, and with an eye for detail.`,
} as const;

export function Renovations({ lang = "de" }: { lang?: "de" | "en" }) {
  return (
    <section
      id="renovations"
      className="border-b border-slate-800/60 bg-slate-950 "
    >
         <div className="mx-auto max-w-6xl px-4 py-14 md:py-16 space-y-10">
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
        </div>
      </div>

      <div className="flex items-center justify-center gap-14 pb-8 px-4">
        <BeforeAfterSlider
          beforeSrc="/images/before-1.jpeg"
          afterSrc="/images/after-1.jpeg"
          alt="Renovation Example"
          key={"test"}
          lang={lang}
        />
        <BeforeAfterSlider
          beforeSrc="/images/before-2.jpeg"
          afterSrc="/images/after-2.jpeg"
          alt="Renovation Example"
          key={"test2"}
          lang={lang}
        />
      </div>
    </section>
  );
}
