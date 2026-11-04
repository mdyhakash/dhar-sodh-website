"use client";

import React from "react";
import { siteConfig } from "@/src/config/site";
import type { Locale, Dictionary } from "@/src/dictionaries";
import { useGitHubRelease } from "@/src/hooks/useGitHubRelease";
import {
  Download,
  ShieldCheck,
  FileCheck,
  ExternalLink,
} from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

interface InstallStep {
  num: string;
  title: string;
  desc: string;
}

export function InstallGuide({ lang, dict }: Props) {
  const isBn = lang === "bn";
  const { latestRelease } = useGitHubRelease(lang);

  return (
    <section id="install" className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.install.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {dict.install.subtitle}
          </p>
        </div>

        {/* Two-Column Procedural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Procedural Steps */}
          <div className="lg:col-span-7 space-y-4">
            {dict.install.steps.map((st: InstallStep, idx: number) => (
              <div
                key={idx}
                className="flex items-start space-x-4 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-indigo-300 hover:bg-indigo-50/10 transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white font-extrabold text-base shadow-xs">
                  {st.num}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    {st.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {st.desc.replace(/DharSodh-.*?\.apk/g, latestRelease.apkFilename)}
                  </p>
                </div>
              </div>
            ))}

            {/* Safety Assurance Callout */}
            <div className="rounded-2xl border border-indigo-200/90 bg-indigo-50/70 p-4 sm:p-5 text-xs sm:text-sm text-indigo-950 font-medium flex items-center space-x-3">
              <ShieldCheck className="h-5 w-5 text-indigo-600 shrink-0" />
              <span>{dict.install.safetyNote}</span>
            </div>
          </div>

          {/* Right Column: Download Card */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <FileCheck className="h-5 w-5 text-indigo-600" />
                <span className="font-bold text-[#0F172A] text-sm">
                  {latestRelease.apkFilename}
                </span>
              </div>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800">
                {latestRelease.tag}
              </span>
            </div>

            {/* Package Specs Matrix */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                <span className="text-[11px] text-slate-400 block">{isBn ? "ফাইল সাইজ" : "File Size"}</span>
                <span className="text-xs font-bold text-slate-800">{latestRelease.fileSize}</span>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                <span className="text-[11px] text-slate-400 block">{isBn ? "ন্যূনতম অ্যান্ড্রয়েড" : "Min Android"}</span>
                <span className="text-xs font-bold text-slate-800">{siteConfig.latestRelease.minAndroid}</span>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                <span className="text-[11px] text-slate-400 block">{isBn ? "আর্কিটেকচার" : "Architecture"}</span>
                <span className="text-xs font-bold text-slate-800">Universal APK</span>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                <span className="text-[11px] text-slate-400 block">{isBn ? "রিলিজের তারিখ" : "Released"}</span>
                <span className="text-xs font-bold text-slate-800">{latestRelease.releaseDate}</span>
              </div>
            </div>

            {/* Direct Download Button */}
            <a
              href={latestRelease.downloadUrl}
              className="w-full flex items-center justify-center space-x-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-indigo-600/25 transition-all min-h-[48px]"
            >
              <Download className="h-5 w-5" />
              <span>
                {dict.install.downloadButton} ({latestRelease.tag})
              </span>
            </a>

            {/* GitHub Releases Link */}
            <div className="mt-5 pt-4 border-t border-slate-100 text-center">
              <a
                href={siteConfig.github.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-500 hover:text-indigo-600"
              >
                <span>{isBn ? "পূর্ববর্তী সকল রিলিজ ও কোড আর্কাইভ দেখুন" : "View all GitHub release assets & tags"}</span>
                <ExternalLink className="h-3 w-3 ml-0.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
