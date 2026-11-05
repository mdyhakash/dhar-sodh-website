"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/config/site";
import { getLocalizedHref, getLanguageSwitchPath } from "@/src/lib/utils";
import type { Locale, Dictionary } from "@/src/dictionaries";
import {
  Menu,
  X,
  Download,
  ExternalLink,
  Globe,
  ChevronRight,
} from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

export function Navbar({ lang, dict }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const targetPath = getLanguageSwitchPath(lang, pathname || "");

  const navLinks = [
    { href: getLocalizedHref(lang, "#features"), label: dict.nav.features },
    // { href: getLocalizedHref(lang, "#previews"), label: dict.nav.previews },
    { href: getLocalizedHref(lang, "#workflow"), label: dict.nav.workflow },
    { href: getLocalizedHref(lang, "#install"), label: dict.nav.install },
    { href: getLocalizedHref(lang, "#pricing"), label: dict.nav.pricing },
    { href: getLocalizedHref(lang, "#faq"), label: dict.nav.faq },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs py-2"
          : "border-b border-slate-100/60 bg-white/80 backdrop-blur-sm py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-11 items-center justify-between">
          
          {/* Brand Logo (Exact image for both bn and en) */}
          <Link
            href={getLocalizedHref(lang, "/")}
            className="flex items-center shrink-0 group focus:outline-none"
          >
            <div className="flex items-center">
              <Image
                src="/dharsodh-logo.png"
                alt="ধারশোধ - DharSodh"
                width={140}
                height={34}
                className="h-8 sm:h-8.5 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-lg px-2.5 py-1 text-[13px] font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden sm:flex items-center space-x-2 shrink-0">
            {/* Compact Language Toggle Pill */}
            <Link
              href={targetPath}
              aria-label="Switch Language"
              className="flex items-center space-x-1 rounded-lg border border-slate-200/90 bg-slate-50 px-2 py-1 text-xs font-bold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all whitespace-nowrap"
            >
              <Globe className="h-3 w-3 text-indigo-600" />
              <span className={lang === "bn" ? "text-indigo-600 font-extrabold" : "text-slate-400"}>বাং</span>
              <span className="text-slate-300 text-[10px]">/</span>
              <span className={lang === "en" ? "text-indigo-600 font-extrabold" : "text-slate-400"}>EN</span>
            </Link>

            {/* Compact Web Login Link */}
            <a
              href={siteConfig.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition-all whitespace-nowrap"
            >
              <span>{dict.common.webLogin}</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>

            {/* Brand Primary Color Download APK Button */}
            <a
              href={getLocalizedHref(lang, "#install")}
              className="inline-flex items-center space-x-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 px-3 py-1 text-xs font-bold text-white shadow-xs transition-all whitespace-nowrap"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{dict.common.downloadApk}</span>
            </a>
          </div>

          {/* Mobile Menu & Lang Button */}
          <div className="flex items-center space-x-1.5 sm:hidden">
            <Link
              href={targetPath}
              className="flex items-center space-x-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-bold text-slate-700"
            >
              <Globe className="h-3 w-3 text-indigo-600" />
              <span>{lang === "bn" ? "EN" : "বাং"}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <a
              href={siteConfig.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs font-bold text-slate-800 hover:text-indigo-600"
            >
              <span>{dict.common.webLogin}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href={getLocalizedHref(lang, "#install")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-xs font-bold text-white shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{dict.common.downloadApk}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
