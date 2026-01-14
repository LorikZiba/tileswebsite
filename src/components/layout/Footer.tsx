"use client";

import type { Language } from "../LandingPage";

type FooterProps = {
  lang: Language;
};

export function Footer({ lang }: FooterProps) {
  const isDe = lang === "de";

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} Dienstleistung Ziba.
          <span className="hidden sm:inline">
            {" "}
            {isDe
              ? "Alle Rechte vorbehalten."
              : "All rights reserved."}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-amber-300">
            {isDe ? "Impressum" : "Impressum"}
          </a>
          <a href="#" className="hover:text-amber-300">
            {isDe ? "Datenschutz" : "Data protection"}
          </a>
        </div>
      </div>
    </footer>
  );
}
