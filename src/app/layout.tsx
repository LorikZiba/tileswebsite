import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dienstleistung Ziba – Fliesenarbeiten",
  description:
    "Professionelle Fliesenarbeiten, Badsanierung und Renovierung im Raum Deutschland. Wir sprechen Deutsch und Albanisch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
