"use client";

import React from "react";
import { siteConfig } from "@/src/config/site";
import type { Locale, Dictionary } from "@/src/dictionaries";
import { Download, ExternalLink, ShieldCheck } from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

export function CtaBanner({ lang, dict }: Props) {
  const isBn = lang === "bn";

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-tr from-[#312E81] via-[#4338CA] to-[#4F46E5] p-8 sm:p-14 text-white shadow-2xl shadow-indigo-950/20 overflow-hidden">
          
          {/* Subtle decorative circles */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/10 blur-2xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {dict.cta.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-indigo-100 leading-relaxed max-w-2xl mx-auto">
              {dict.cta.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`/${lang}#install`}
                className="inline-flex items-center justify-center space-x-2.5 rounded-2xl bg-white px-7 py-3.5 text-base font-bold text-indigo-900 shadow-lg hover:bg-indigo-50 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[48px]"
              >
                <Download className="h-5 w-5 text-indigo-700" />
                <span>{dict.cta.downloadBtn}</span>
              </a>

              <a
                href={siteConfig.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 rounded-2xl border-2 border-white/80 bg-white/10 backdrop-blur-xs px-6 py-3.5 text-base font-bold text-white hover:bg-white hover:text-indigo-900 transition-all min-h-[48px]"
              >
                <span>{dict.cta.webBtn}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-indigo-200">
              <ShieldCheck className="h-4 w-4 text-indigo-300" />
              <span>{isBn ? "কোনো ক্রেডিট কার্ড বা সাবস্ক্রিপশন ফি নেই" : "No credit card or recurring subscription needed"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
