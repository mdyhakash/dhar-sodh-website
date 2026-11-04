import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, type Locale } from "@/src/dictionaries";
import { siteConfig } from "@/src/config/site";
import { getLocalizedHref } from "@/src/lib/utils";
import {
  ShieldCheck,
  Lock,
  Database,
  Smartphone,
  EyeOff,
  ArrowLeft,
  Mail,
  CheckCircle,
} from "lucide-react";

interface PrivacySection {
  title: string;
  content: string;
}

export function getPrivacyMetadata(lang: Locale): Metadata {
  const isBn = lang === "bn";

  return {
    title: isBn
      ? `গোপনীয়তা ও ডেটা সুরক্ষা নীতিমালা - ${siteConfig.name.bn}`
      : `Privacy & Security Policy - ${siteConfig.name.en}`,
    description: isBn
      ? "ধারশোধ (DharSodh) এর ব্যবহারকারীর ডেটা স্টোরেজ নিয়ম এবং থার্ড-পার্টি বিজ্ঞাপন সুরক্ষার বিস্তারিত নীতিমালা।"
      : "Data protection guidelines, encrypted local records, and zero-ad principles of DharSodh.",
    alternates: {
      canonical: isBn ? "/privacy" : "/en/privacy",
      languages: {
        bn: "/privacy",
        en: "/en/privacy",
      },
    },
  };
}

export function PrivacyView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const isBn = lang === "bn";

  const ruleIcons = [
    <Smartphone key="1" className="h-6 w-6 text-indigo-600" />,
    <Lock key="2" className="h-6 w-6 text-indigo-600" />,
    <ShieldCheck key="3" className="h-6 w-6 text-indigo-600" />,
    <Database key="4" className="h-6 w-6 text-indigo-600" />,
    <EyeOff key="5" className="h-6 w-6 text-indigo-600" />,
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href={getLocalizedHref(lang, "/")}
            className="inline-flex items-center space-x-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{dict.common.backToHome}</span>
          </Link>
        </div>

        {/* Policy Header Box */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-xs mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.privacy.title}
          </h1>

          <p className="mt-2 text-xs font-semibold text-slate-400">
            {dict.privacy.lastUpdated}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {dict.privacy.intro}
          </p>
        </div>

        {/* Structured Storage Rules Validation */}
        <div className="space-y-6 mb-12">
          {dict.privacy.sections.map((sec: PrivacySection, idx: number) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-indigo-300 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 shadow-xs">
                  {ruleIcons[idx]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {sec.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Absolute Protection Summary Card */}
        <div className="rounded-3xl border-2 border-indigo-500/80 bg-gradient-to-tr from-indigo-50/50 via-white to-violet-50/50 p-8 sm:p-10 shadow-xs mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <CheckCircle className="h-6 w-6 text-indigo-600" />
            <h3 className="text-xl font-bold text-[#0F172A]">
              {isBn ? "থার্ড-পার্টি বিজ্ঞাপন মুক্ত স্বচ্ছতার প্রত্যয়ন" : "Certification of Zero Third-Party Advertising"}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isBn
              ? "ধারশোধ কোনো অবস্থাতেই Google AdMob, Facebook Pixel, Unity Ads বা কোনো প্রকার বাণিজ্যিক ট্র্যাকার কোড বহন করে না। আপনার আর্থিক হিসাব বই কোনো সার্ভার বা ব্রোকারের কাছে বাণিজ্যিক কারণে হস্তান্তরিত হয় না।"
              : "DharSodh is strictly free from Google AdMob, Facebook Pixel, Unity Ads, and any behavioral tracking SDKs. Your personal financial ledger remains strictly confidential under your own supervision."}
          </p>
        </div>

        {/* Contact and Audit Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600">
          <p>{dict.privacy.contactInfo}</p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700"
            >
              <Mail className="h-4 w-4" />
              <span>{siteConfig.author.email}</span>
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={`mailto:${siteConfig.author.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-700 hover:text-indigo-600"
            >
              সহায়তা ও সাপোর্ট
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
