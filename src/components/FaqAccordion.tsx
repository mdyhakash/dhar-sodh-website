"use client";

import React, { useState } from "react";
import type { Locale, Dictionary } from "@/src/dictionaries";
import { ChevronDown } from "lucide-react";

interface Props {
  lang?: Locale;
  dict: Dictionary;
}

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ dict }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.faq.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {dict.faq.subtitle}
          </p>
        </div>

        {/* 7 Styled Accordion Panels */}
        <div className="space-y-4">
          {dict.faq.items.map((item: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-500/80 bg-indigo-50/25 shadow-md shadow-indigo-950/5 ring-1 ring-indigo-500/20"
                    : "border-slate-200/90 bg-white hover:border-slate-300 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "bg-indigo-600 text-white rotate-180 shadow-xs"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-300">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
