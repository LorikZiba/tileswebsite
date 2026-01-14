"use client";

import { useState } from "react";
import { Header } from "./layout/Header";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { WhyUs } from "./sections/WhyUs";
import { Projects } from "./sections/Projects";
import { Process } from "./sections/Process";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./layout/Footer";
import { Renovations } from "./sections/Renovations";

export type Language = "de" | "en";

export default function LandingPage() {
  const [lang, setLang] = useState<Language>("de");

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header lang={lang} onLangChange={setLang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <Services lang={lang} />
        <WhyUs lang={lang} />
        <Projects lang={lang} />
        <Renovations lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
