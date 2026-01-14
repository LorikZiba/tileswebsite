"use client";

import type { Language } from "../LandingPage";
import { useMemo } from "react";

type HeaderProps = {
  lang: Language;
  onLangChange: (lang: Language) => void;
};

const navLabels = {
  de: {
    home: "Startseite",
    services: "Leistungen",
    projects: "Referenzen",
    about: "Über uns",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    about: "About Us",
    contact: "Contact",
  },
} as const;

export function Header({ lang, onLangChange }: HeaderProps) {
  const t = useMemo(() => navLabels[lang], [lang]);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/90 text-slate-950 font-bold shadow-lg shadow-amber-500/30">
            DZ
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
              Dienstleistung
            </div>
            <div className="text-base font-semibold">Ziba</div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center gap-6">
          <nav className="hidden text-sm font-medium text-slate-200 md:flex md:items-center md:gap-6">
            <a href="#home" className="hover:text-amber-400 transition-colors">
              {t.home}
            </a>
            <a
              href="#services"
              className="hover:text-amber-400 transition-colors"
            >
              {t.services}
            </a>
            <a
              href="#projects"
              className="hover:text-amber-400 transition-colors"
            >
              {t.projects}
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              {t.about}
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors"
            >
              {t.contact}
            </a>
          </nav>

          {/* Language Switch */}
          <div className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/60 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onLangChange("de")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "de"
                  ? "bg-amber-500 text-slate-950"
                  : "text-slate-300 hover:text-amber-300"
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => onLangChange("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "en"
                  ? "bg-amber-500 text-slate-950"
                  : "text-slate-300 hover:text-amber-300"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
