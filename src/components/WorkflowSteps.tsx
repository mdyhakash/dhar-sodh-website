"use client";

import React from "react";
import type { Locale, Dictionary } from "@/src/dictionaries";
import { UserCheck, Edit3, CheckCheck } from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export function WorkflowSteps({ lang, dict }: Props) {
  const isBn = lang === "bn";

  const stepIcons = [
    <UserCheck key="1" className="h-6 w-6 text-indigo-600" />,
    <Edit3 key="2" className="h-6 w-6 text-indigo-600" />,
    <CheckCheck key="3" className="h-6 w-6 text-indigo-600" />,
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.workflow.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {dict.workflow.subtitle}
          </p>
        </div>

        {/* 3-Step Horizontal Track */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 -z-0"></div>

          {dict.workflow.steps.map((item: WorkflowStep, idx: number) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white font-extrabold text-lg shadow-md shadow-indigo-600/20 mb-6">
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Step Action Tag */}
              <div className="mt-6 flex items-center space-x-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
                {stepIcons[idx]}
                <span className="ml-1">
                  {idx === 0
                    ? isBn ? "গেস্ট বা ক্লাউড সিঙ্ক" : "Guest or Cloud"
                    : idx === 1
                    ? isBn ? "তাত্ক্ষণিক এন্ট্রি" : "Instant Record"
                    : isBn ? "স্বয়ংক্রিয় হিসাব" : "Auto Balance"}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
