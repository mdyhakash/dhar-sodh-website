"use client";

import { siteConfig } from "@/src/config/site";
import type { Dictionary, Locale } from "@/src/dictionaries";
import { useGitHubRelease } from "@/src/hooks/useGitHubRelease";
import { getLocalizedHref } from "@/src/lib/utils";
import {
  Calendar,
  Check,
  Download,
  ExternalLink,
  GitCommit,
  Sparkles,
  Tag,
} from "lucide-react";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

export function PricingReleases({ lang, dict }: Props) {
  const isBn = lang === "bn";
  const { latestRelease, allReleases } = useGitHubRelease(lang);

  const fallbackReleases = [
    {
      tag: latestRelease.tag,
      date: latestRelease.releaseDate,
      commit: latestRelease.commit,
      note: latestRelease.notes
        ? latestRelease.notes.replace(/^#{1,6}\s*/, "")
        : isBn
          ? "নতুন দ্রুত লেনদেন ডায়ালগ, লোকাল SQLite ক্যাশিং অপ্টিমাইজেশন এবং বাংলা কারেন্সি গণক।"
          : "Fast transaction dialogue, SQLite cache engine optimization, and dual currency parser.",
      bullets: latestRelease.bullets,
      isLatest: true,
      downloadUrl: latestRelease.downloadUrl,
    },
    {
      tag: "v1.4.0",
      date: isBn ? "১৮ সেপ্টেম্বর, ২০২৬" : "Sep 18, 2026",
      commit: "82d3f11",
      note: isBn
        ? "সম্পূর্ণ অফলাইন মোডে নিরবচ্ছিন্ন ডাটা ব্যাকআপ ও ক্লাউড রিকভারি ইঞ্জিন সংযোজন।"
        : "Full offline-first database synchronization and instant cloud snapshot recovery.",
      bullets: [],
      isLatest: false,
      downloadUrl: `${siteConfig.github.releasesUrl}/tag/v1.4.0`,
    },
    {
      tag: "v1.3.5",
      date: isBn ? "০৫ আগস্ট, ২০২৬" : "Aug 05, 2026",
      commit: "549b8ce",
      note: isBn
        ? "আংশিক ও কিস্তিতে লেনদেন পরিশোধের হিসাব এবং ফিল্টারিং সুবিধা।"
        : "Flexible partial settlement and installment repayment tracking.",
      bullets: [],
      isLatest: false,
      downloadUrl: `${siteConfig.github.releasesUrl}/tag/v1.3.5`,
    },
  ];

  const displayList =
    allReleases.length > 0
      ? allReleases.map((r, i) => ({
          tag: r.tag,
          date: r.releaseDate,
          commit: r.commit,
          note: r.notes.replace(/^#{1,6}\s*/, ""),
          bullets: r.bullets,
          isLatest: i === 0,
          downloadUrl: r.downloadUrl,
        }))
      : fallbackReleases;

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.pricing.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {dict.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Card & Open Source Commitment */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative overflow-hidden rounded-3xl border-2 border-indigo-600/80 bg-white p-8 sm:p-12 shadow-xl shadow-indigo-950/5">
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[11px] font-extrabold uppercase px-6 py-1.5 rounded-bl-2xl shadow-xs tracking-wider">
              {isBn ? "১০০% সম্পূর্ণ ফ্রি" : "100% Free Service"}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                  {dict.pricing.tierName}
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#0F172A]">
                    {dict.pricing.tierPrice}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    / {dict.pricing.tierPeriod}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {dict.pricing.tierDesc}
                </p>

                <div className="mt-6">
                  <a
                    href={getLocalizedHref(lang, "#install")}
                    className="inline-flex items-center justify-center space-x-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-indigo-600/25 transition-all min-h-[48px]"
                  >
                    <span>{dict.pricing.ctaButton}</span>
                    <Sparkles className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="md:col-span-5 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  {isBn ? "অন্তর্ভুক্ত সকল সুবিধা" : "Included by Default"}
                </div>
                <ul className="space-y-3">
                  {dict.pricing.features.map((feature: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Releases Ledger */}
        <div className="max-w-4xl mx-auto">
          {/* Header Row with responsive wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                {dict.pricing.releasesHeader}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {isBn
                  ? "GitHub অডিট লগ ও রিলিজ বাইনারি ট্র্যাকার"
                  : "GitHub verified release builds"}
              </p>
            </div>

            <a
              href={siteConfig.github.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-700 hover:underline shrink-0 self-start sm:self-auto"
            >
              <span>{dict.pricing.viewAllReleases}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Release Cards List */}
          <div className="space-y-4">
            {displayList.map((rel, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all gap-4"
              >
                <div className="flex items-start space-x-3.5 sm:space-x-4 flex-1 min-w-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 shadow-xs">
                    <Tag className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-extrabold text-[#0F172A] text-base sm:text-lg tracking-tight">
                        {rel.tag}
                      </span>
                      {rel.isLatest && (
                        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-emerald-700">
                          {isBn ? "সর্বশেষ সংস্করণ" : "Latest Stable"}
                        </span>
                      )}
                      {rel.commit && (
                        <span className="inline-flex items-center text-[11px] text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded-md">
                          <GitCommit className="h-3 w-3 mr-1 text-slate-400" />
                          {rel.commit}
                        </span>
                      )}
                    </div>

                    <p className="mt-1.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {rel.note}
                    </p>

                    {/* {rel.bullets && rel.bullets.length > 0 && (
                      <ul className="mt-2 space-y-1 text-xs text-slate-600">
                        {rel.bullets.slice(0, 3).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-1.5">
                            <span className="text-indigo-500 font-bold leading-none mt-1">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )} */}

                    <div className="mt-2.5 flex items-center text-[11px] sm:text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                      <span>{rel.date}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 sm:pt-0 sm:self-center shrink-0 border-t border-slate-100 sm:border-0 mt-1 sm:mt-0">
                  <a
                    href={rel.downloadUrl}
                    className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white px-4 py-2.5 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all min-h-[42px]"
                  >
                    <Download className="h-4 w-4" />
                    <span>{isBn ? "APK নামান" : "Download APK"}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
