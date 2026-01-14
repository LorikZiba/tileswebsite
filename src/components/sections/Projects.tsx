"use client";

import Image from "next/image";
import type { Language } from "../LandingPage";

type Project = {
  key: string;
  src: string;
  room: { de: string; en: string };
  location: string;
};

const projects: Project[] = [
  {
    key: "bathroom-modern",
    src: "/images/bathroom.jpeg",
    room: {
      de: "Badezimmer",
      en: "Bathroom",
    },
    location: "Singen",
  },
  {
    key: "kitchen-floor",
    src: "/images/kuzhina.jpg",
    room: {
      de: "Küche",
      en: "Kitchen",
    },
    location: "Engen",
  },
  {
    key: "hallway",
    src: "/images/hallway.jpeg",
    room: {
      de: "Flur / Eingang",
      en: "Hallway / Entrance",
    },
    location: "Singen",
  },
  {
    key: "terrace",
    src: "/images/taras.jpeg",
    room: {
      de: "Terrasse",
      en: "Terrace",
    },
    location: "Stockach",
  },
  {
    key: "vinyl",
    src: "/images/vinyl.jpeg",
    room: {
      de: "Parkett/Vinylboden",
      en: "Parquet/Vinyl",
    },
    location: "Singen",
  },
  {
    key: "garage",
    src: "/images/garazh.jpeg",
    room: {
      de: "Garage",
      en: "Garage",
    },
    location: "Konstanz",
  },
];

const sectionTitle = {
  de: "Referenzen & Projekte",
  en: "References & Projects",
} as const;

const sectionSubtitle = {
  de: "Ein kleiner Einblick in abgeschlossene Arbeiten. Weitere Referenzen zeigen wir Ihnen gerne im persönlichen Gespräch.",
  en: "A brief insight into completed projects. We are happy to show you further references during a personal conversation.",
} as const;

type ProjectsProps = {
  lang: Language;
};

export function Projects({ lang }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="border-b border-slate-800/60 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {sectionTitle[lang]}
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              {sectionSubtitle[lang]}
            </p>
          </div>

          <div className="mt-2 text-xs text-slate-400 sm:text-sm">
            {lang === "de" ? (
              <span>
                Hinweis: Aus Datenschutzgründen zeigen wir nur eine kleine,
                anonymisierte Auswahl.
              </span>
            ) : (
              <span>
                Note: For privacy reasons, we only show a small, anonymized selection.
              </span>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.key}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 shadow-[0_18px_40px_-22px_rgba(15,23,42,1)]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.src}
                  alt={`${project.room[lang]} – ${project.location}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>

              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-slate-950/80 px-3 py-2 text-xs text-slate-100 backdrop-blur">
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {project.room[lang]}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {project.location}
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                  {lang === "de" ? "Fertiggestellt" : "Completed"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
