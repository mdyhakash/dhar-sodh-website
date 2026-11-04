import React from "react";
import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/src/dictionaries";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export function generateStaticParams() {
  return [{ lang: "bn" }, { lang: "en" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;

  if (lang !== "bn" && lang !== "en") {
    notFound();
  }

  const dict = getDictionary(lang);
  const fontClass = lang === "bn" ? "font-bengali lang-bn" : "font-english lang-en";

  return (
    <div className={`min-h-screen flex flex-col ${fontClass}`}>
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

