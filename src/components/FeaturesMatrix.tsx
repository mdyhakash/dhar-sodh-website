"use client";

import React from "react";
import type { Locale, Dictionary } from "@/src/dictionaries";
import {
  BookOpen,
  Receipt,
  History,
  Coins,
  WifiOff,
  ShieldCheck,
} from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  badge: string;
}

export function FeaturesMatrix({ dict }: Props) {
  const iconMap: Record<string, React.ReactNode> = {
    ledger: <BookOpen className="h-6 w-6 text-indigo-600" />,
    settlement: <Receipt className="h-6 w-6 text-indigo-600" />,
    notifications: <Receipt className="h-6 w-6 text-indigo-600" />,
    history: <History className="h-6 w-6 text-indigo-600" />,
    currency: <Coins className="h-6 w-6 text-indigo-600" />,
    offline: <WifiOff className="h-6 w-6 text-indigo-600" />,
    safety: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.features.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {dict.features.subtitle}
          </p>
        </div>

        {/* 6 Grid Cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dict.features.items.map((item: FeatureItem) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-indigo-50 border-indigo-100 shadow-xs group-hover:scale-110 transition-transform">
                    {iconMap[item.id]}
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 border border-slate-200/80">
                    {item.badge}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
