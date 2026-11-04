"use client";

import React, { useState } from "react";
import { WebDashboardMockup } from "./mockups/WebDashboardMockup";
import { MobileAppMockup } from "./mockups/MobileAppMockup";
import type { Locale, Dictionary } from "@/src/dictionaries";
import { Monitor, Smartphone, CheckCircle } from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

export function ComponentPreviews({ lang, dict }: Props) {
  const [selectedDevice, setSelectedDevice] = useState<"web" | "mobile">("web");

  return (
    <section id="previews" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.previews.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {dict.previews.subtitle}
          </p>

          {/* Device Tab Selector */}
          <div className="mt-8 inline-flex items-center rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200/80">
            <button
              type="button"
              onClick={() => setSelectedDevice("web")}
              className={`flex items-center space-x-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all min-h-[44px] ${
                selectedDevice === "web"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Monitor className="h-4 w-4" />
              <span>{dict.previews.tabWeb}</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedDevice("mobile")}
              className={`flex items-center space-x-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all min-h-[44px] ${
                selectedDevice === "mobile"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Smartphone className="h-4 w-4" />
              <span>{dict.previews.tabMobile}</span>
            </button>
          </div>
        </div>

        {/* Feature Highlights Pill Bar */}
        <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {selectedDevice === "web" ? (
            <>
              <div className="flex items-center space-x-2 rounded-xl bg-white/90 border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>{dict.previews.webFeature1}</span>
              </div>
              <div className="flex items-center space-x-2 rounded-xl bg-white/90 border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>{dict.previews.webFeature2}</span>
              </div>
              <div className="flex items-center space-x-2 rounded-xl bg-white/90 border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>{dict.previews.webFeature3}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-2 rounded-xl bg-white/90 border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>{dict.previews.mobileFeature1}</span>
              </div>
              <div className="flex items-center space-x-2 rounded-xl bg-white/90 border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>{dict.previews.mobileFeature2}</span>
              </div>
              <div className="flex items-center space-x-2 rounded-xl bg-white/90 border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>{dict.previews.mobileFeature3}</span>
              </div>
            </>
          )}
        </div>

        {/* Selected View Display Container */}
        <div className="max-w-5xl mx-auto transition-all duration-300">
          {selectedDevice === "web" ? (
            <div className="transition-opacity duration-300">
              <WebDashboardMockup lang={lang} interactive={true} />
            </div>
          ) : (
            <div className="flex justify-center transition-opacity duration-300 py-4">
              <MobileAppMockup lang={lang} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
