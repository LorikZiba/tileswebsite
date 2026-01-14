"use client";

import type { Language } from "../LandingPage";

type Step = {
  key: string;
  number: string;
  title: { de: string; en: string };
  desc: { de: string; en: string };
};

const steps: Step[] = [
  {
    key: "contact",
    number: "01",
    title: {
      de: "Kontakt & Beratung",
      en: "Contact & Consultation",
    },
    desc: {
      de: "Sie senden uns eine Anfrage – gerne mit Fotos oder Grundriss. Wir beraten Sie kostenlos und unverbindlich.",
      en: "Send us an inquiry – preferably with photos or floor plan. We advise you for free and without obligation.",
    },
  },
  {
    key: "onsite",
    number: "02",
    title: {
      de: "Vor-Ort-Termin",
      en: "On-Site Appointment",
    },
    desc: {
      de: "Wir kommen vor Ort, messen alles genau und besprechen Ihre Wünsche und Möglichkeiten.",
      en: "We visit your site, measure everything precisely and discuss your wishes and options.",
    },
  },
  {
    key: "offer",
    number: "03",
    title: {
      de: "Festes Angebot",
      en: "Fixed Quote",
    },
    desc: {
      de: "Sie erhalten ein schriftliches Angebot mit transparenten Preisen – ohne versteckte Kosten.",
      en: "You receive a written quote with transparent pricing – no hidden costs.",
    },
  },
  {
    key: "execution",
    number: "04",
    title: {
      de: "Ausführung der Arbeiten",
      en: "Execution of Work",
    },
    desc: {
      de: "Wir führen die Arbeiten sauber, termingerecht und zuverlässig aus – bis alles fertig verfugt ist.",
      en: "We complete the work cleanly, on schedule and reliably – until everything is finished and grouted.",
    },
  },
];

const sectionTitle = {
  de: "So läuft die Zusammenarbeit",
  en: "How Our Collaboration Works",
} as const;

const sectionSubtitle = {
  de: "Schritt für Schritt zu Ihrem fertigen Bad, Boden oder Ihrer Terrasse.",
  en: "Step by step to your finished bathroom, floor or terrace.",
} as const;

type ProcessProps = {
  lang: Language;
};

export function Process({ lang }: ProcessProps) {
  return (
    <section
      id="process"
      className="border-b border-slate-800/60 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {sectionTitle[lang]}
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            {sectionSubtitle[lang]}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.key}
              className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-[0_18px_40px_-22px_rgba(15,23,42,1)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {lang === "de" ? "Schritt" : "Step"}
                </span>
                <span className="text-sm font-semibold text-amber-400">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                {step.title[lang]}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {step.desc[lang]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
