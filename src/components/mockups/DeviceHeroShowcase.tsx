"use client";

import React from "react";
import { WebDashboardMockup } from "./WebDashboardMockup";
import { MobileAppMockup } from "./MobileAppMockup";
import type { Locale } from "@/src/dictionaries";
import { Smartphone, Monitor } from "lucide-react";

interface Props {
  lang: Locale;
}

export function DeviceHeroShowcase({ lang }: Props) {
  const isBn = lang === "bn";

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-4 pb-8 lg:pb-12">
      {/* Subtle ambient colored glow orbs matching brand indigo & violet */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl"></div>

      {/* Main Multi-device Layout */}
      <div className="relative">
        {/* Desktop Web Dashboard (Base Layer) */}
        <div className="w-full lg:w-[86%] transition-transform duration-500 hover:scale-[1.01]">
          <div className="mb-2 hidden sm:flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <Monitor className="h-4 w-4 text-indigo-600" />
            <span>{isBn ? "ওয়েব সংস্করণ ড্যাশবোর্ড" : "Web Edition Dashboard"}</span>
          </div>
          <WebDashboardMockup lang={lang} interactive={false} />
        </div>

        {/* Smartphone Mockup (Overlapping Front Layer) */}
        <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-10 lg:right-0 lg:w-[320px] xl:w-[340px] z-20 drop-shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <div className="mb-2 hidden lg:flex items-center justify-end space-x-2 text-xs font-semibold text-slate-500 pr-4">
            <Smartphone className="h-4 w-4 text-indigo-600" />
            <span>{isBn ? "অ্যান্ড্রয়েড অ্যাপ সংস্করণ" : "Android App Edition"}</span>
          </div>
          <MobileAppMockup lang={lang} />
        </div>
      </div>
    </div>
  );
}
