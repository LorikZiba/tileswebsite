"use client";

import type { Language } from "../LandingPage";

type Service = {
  key: string;
  icon: string;
  title: { de: string; en: string };
  desc: { de: string; en: string };
};

const services: Service[] = [
  {
    key: "bathroom",
    icon: "🛁",
    title: {
      de: "Badsanierung",
      en: "Bathroom Renovation",
    },
    desc: {
      de: "Komplette Badsanierung, Abdichtung, Wand- und Bodenfliesen, Silikonarbeiten.",
      en: "Complete bathroom renovation, waterproofing, wall and floor tiles, silicone work.",
    },
  },
  {
    key: "floor",
    icon: "🏠",
    title: {
      de: "Bodenfliesen",
      en: "Floor Tiles",
    },
    desc: {
      de: "Fliesen für Wohnräume, Flure, Küchen und Keller – sauber und präzise verlegt.",
      en: "Tiles for living spaces, hallways, kitchens and basements – clean and precise installation.",
    },
  },
  {
    key: "terrace",
    icon: "🌤️",
    title: {
      de: "Terrassen & Balkone",
      en: "Terraces & Balconies",
    },
    desc: {
      de: "Wetterbeständige Fliesen für Außenbereiche inklusive Gefälle und Entwässerung.",
      en: "Weather-resistant tiles for outdoor areas including slope and drainage.",
    },
  },
  {
    key: "repair",
    icon: "🧱",
    title: {
      de: "Reparaturen",
      en: "Repairs",
    },
    desc: {
      de: "Austausch beschädigter Fliesen, Neuverfugung und Ausbesserungen im Bestand.",
      en: "Replacement of damaged tiles, regrouting and repairs in existing spaces.",
    },
  },
  {
    key: "grout",
    icon: "✨",
    title: {
      de: "Parkett & Vinylboden",
      en: "Parquet & Vinyl Flooring",
    },
    desc: {
      de: "Hochwertige Vinyl- und Parkettbodenverlegung mit sauberem, nahtlosem Finish.",
      en: "High-quality vinyl and parquet flooring installation with a clean, seamless finish.",
    },
  },
  {
    key: "other",
    icon: "🛠️",
    title: {
      de: "Renovierungen",
      en: "Renovations",
    },
    desc: {
      de: "Umbauten rund um Fliesen, Estrich und Vorbereitung des Untergrunds.",
      en: "Modifications around tiles, screeds and substrate preparation.",
    },
  },
];

const sectionTitle = {
  de: "Unsere Leistungen",
  en: "Our Services",
} as const;

const sectionSubtitle = {
  de: "Alles rund um Fliesenarbeiten – von der einzelnen Reparatur bis zur kompletten Badsanierung.",
  en: "Everything related to tile work – from single repairs to complete bathroom renovation.",
} as const;

type ServicesProps = {
  lang: Language;
};

export function Services({ lang }: ServicesProps) {
  return (
    <section
      id="services"
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.key}
              className="group relative flex flex-col rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-[0_18px_40px_-22px_rgba(15,23,42,1)] transition hover:-translate-y-1 hover:border-amber-400/70 hover:bg-slate-900/90"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-lg">
                <span className="leading-none">{service.icon}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-50">
                {service.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {service.desc[lang]}
              </p>
              {/* subtle bottom line */}
              <div className="mt-4 h-px w-10 rounded-full bg-linear-to-r from-amber-500/80 to-transparent opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
