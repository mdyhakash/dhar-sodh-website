"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/config/site";
import type { Locale, Dictionary } from "@/src/dictionaries";
import {
  ExternalLink,
  Globe,
  Shield,
  Download,
  Mail,
  ArrowUpRight,
} from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

export function Footer({ lang, dict }: Props) {
  const pathname = usePathname();
  const isBn = lang === "bn";

  const targetLang = lang === "bn" ? "en" : "bn";
  const targetPath = pathname ? pathname.replace(`/${lang}`, `/${targetLang}`) : `/${targetLang}`;

  return (
    <footer className="border-t border-slate-200 bg-[#0F172A] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={`/${lang}`} className="inline-block group focus:outline-none">
              <div className="inline-flex items-center rounded-md bg-white px-3.5 py-2 shadow-sm transition-transform group-hover:scale-105">
                <Image
                  src="/dharsodh-logo.png"
                  alt="ধারশোধ - DharSodh"
                  width={140}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {dict.hero.description}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                aria-label="Email Support"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors"
                aria-label="Developer Portfolio"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {isBn ? "ন্যাভিগেশন" : "Navigation"}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={`/${lang}#features`} className="hover:text-indigo-400 transition-colors">
                  {dict.nav.features}
                </a>
              </li>
              <li>
                <a href={`/${lang}#previews`} className="hover:text-indigo-400 transition-colors">
                  {dict.nav.previews}
                </a>
              </li>
              <li>
                <a href={`/${lang}#workflow`} className="hover:text-indigo-400 transition-colors">
                  {dict.nav.workflow}
                </a>
              </li>
              <li>
                <a href={`/${lang}#install`} className="hover:text-indigo-400 transition-colors">
                  {dict.nav.install}
                </a>
              </li>
              <li>
                <a href={`/${lang}#pricing`} className="hover:text-indigo-400 transition-colors">
                  {dict.nav.pricing}
                </a>
              </li>
              <li>
                <a href={`/${lang}#faq`} className="hover:text-indigo-400 transition-colors">
                  {dict.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Download */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {isBn ? "প্ল্যাটফর্ম ও অ্যাপ" : "Platforms"}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={siteConfig.latestRelease.downloadUrl}
                  className="inline-flex items-center space-x-1 hover:text-indigo-400 transition-colors"
                >
                  <Download className="h-3.5 w-3.5 text-indigo-400 mr-1" />
                  <span>Android APK ({siteConfig.latestRelease.version})</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-indigo-400 mr-1" />
                  <span>{dict.common.webLogin}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  GitHub Releases
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  {isBn ? "সোর্স কোড অডিট" : "Source Code Audit"}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Locale */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {isBn ? "আইনি ও পলিসি" : "Legal & Privacy"}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href={`/${lang}/privacy`}
                  className="inline-flex items-center space-x-1.5 text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  <Shield className="h-3.5 w-3.5" />
                  <span>{dict.common.privacyPolicy}</span>
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500 block">
                  {isBn ? "কোনো ট্র্যাকার বা থার্ড-পার্টি বিজ্ঞাপন নেই" : "Zero third-party trackers or ad SDKs"}
                </span>
              </li>
            </ul>

            {/* Secondary Locale Controls */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                {isBn ? "ভাষা পরিবর্তন" : "Language Switch"}
              </span>
              <Link
                href={targetPath}
                className="inline-flex items-center space-x-2 rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all min-h-[44px]"
              >
                <Globe className="h-3.5 w-3.5 text-indigo-400" />
                <span>{dict.common.switchLanguage}</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Developer Layout */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            <p>© {new Date().getFullYear()} {dict.common.brandName} (DharSodh). {dict.common.copyright}</p>
          </div>

          {/* Developer Identity Layout */}
          <div className="flex items-center space-x-1.5 text-slate-400">
            <span>{dict.common.developedBy}</span>
            <a
              href="https://mdyhakash.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold text-indigo-400 hover:text-indigo-300 hover:underline"
            >
              <span>Md Yasin Hossain Akash</span>
              <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
