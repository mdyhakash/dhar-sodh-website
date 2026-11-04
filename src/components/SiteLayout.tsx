import React from "react";
import { getDictionary, type Locale } from "@/src/dictionaries";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

interface SiteLayoutProps {
  children: React.ReactNode;
  lang: Locale;
}

export function SiteLayout({ children, lang }: SiteLayoutProps) {
  const dict = getDictionary(lang);
  const fontClass = lang === "bn" ? "font-bengali lang-bn" : "font-english lang-en";

  return (
    <div className={`min-h-screen flex flex-col ${fontClass}`} data-lang={lang}>
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
