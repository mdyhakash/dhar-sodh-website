"use client";

import React from "react";
import { siteConfig } from "@/src/config/site";
import { getLocalizedHref } from "@/src/lib/utils";
import type { Locale, Dictionary } from "@/src/dictionaries";
import { DeviceHeroShowcase } from "./mockups/DeviceHeroShowcase";
import {
  Download,
  ExternalLink,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

export function Hero({ lang, dict }: Props) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 hero-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Text Content Area */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
          
          {/* High-Converting Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.18] sm:leading-[1.15]">
            <span>{dict.hero.titlePrefix} </span>
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
              {dict.hero.titleHighlight}
            </span>{" "}
            <span>{dict.hero.titleSuffix}</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {dict.hero.description}
          </p>

          {/* Action CTAs and Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={getLocalizedHref(lang, "#install")}
              className="inline-flex items-center justify-center space-x-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[48px]"
            >
              <Download className="h-5 w-5" />
              <span>{dict.hero.primaryCta}</span>
            </a>

            <a
              href={siteConfig.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-2xl border-2 border-slate-300/80 bg-white px-6 py-3.5 text-base font-bold text-[#0F172A] shadow-xs hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50/30 transition-all min-h-[48px]"
            >
              <span>{dict.hero.secondaryCta}</span>
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-500">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo-600" />
              <span>{dict.hero.stats.openSource}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="h-4 w-4 text-indigo-600" />
              <span>{dict.hero.stats.volume}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Users className="h-4 w-4 text-indigo-600" />
              <span>{dict.hero.stats.users}</span>
            </div>
          </div>

        </div>

        {/* Multi-Device Setup: Overlapping CSS Mockups */}
        <div className="mt-2 lg:mt-6">
          <DeviceHeroShowcase lang={lang} />
        </div>

      </div>
    </section>
  );
}
