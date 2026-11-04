"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Plus,
  ArrowDownLeft,
  Bell,
  Home,
  BookOpen,
  PieChart,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  Wifi,
  Battery,
  Signal,
  Receipt,
  Shield,
} from "lucide-react";
import { formatCurrency } from "@/src/lib/utils";
import type { Locale } from "@/src/dictionaries";

interface Props {
  lang: Locale;
}

export function MobileAppMockup({ lang }: Props) {
  const isBn = lang === "bn";
  const [activeNav, setActiveNav] = useState<"home" | "ledger" | "reports" | "profile">("home");
  const [recordSuccess, setRecordSuccess] = useState<string | null>(null);

  const borrowers = [
    {
      id: "b1",
      name: isBn ? "তানভীর আহমেদ" : "Tanvir Ahmed",
      phone: "01712-345678",
      amount: 25000,
      daysLeft: isBn ? "১৫ দিন বাকি" : "15 days left",
      isOverdue: false,
      isSettled: false,
      initials: "TA",
      bg: "bg-indigo-100 text-indigo-800",
      reason: isBn ? "ব্যক্তিগত লোন" : "Personal Loan",
    },
    {
      id: "b2",
      name: isBn ? "তাসনিম ফারহানা" : "Tasnim Farhana",
      phone: "01823-987654",
      amount: 18200,
      daysLeft: isBn ? "৩ দিন অতিবাহিত" : "3 days overdue",
      isOverdue: true,
      isSettled: false,
      initials: "TF",
      bg: "bg-rose-100 text-rose-800",
      reason: isBn ? "মেডিকেল ইমার্জেন্সি" : "Medical Emergency",
    },
    {
      id: "b3",
      name: isBn ? "রহিমুল ইসলাম" : "Rahimul Islam",
      phone: "01911-223344",
      amount: 12000,
      daysLeft: isBn ? "পরিশোধ সম্পন্ন" : "Fully Settled",
      isOverdue: false,
      isSettled: true,
      initials: "RI",
      bg: "bg-emerald-100 text-emerald-800",
      reason: isBn ? "ল্যাপটপ ক্রয়" : "Laptop Purchase",
    },
  ];

  const handleRecordPayment = (name: string) => {
    setRecordSuccess(name);
    setTimeout(() => {
      setRecordSuccess(null);
    }, 2500);
  };

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] select-none font-sans">
      {/* Outer Phone Shell with Titanium Bezel */}
      <div className="relative rounded-[48px] border-[10px] border-slate-900 bg-slate-950 p-2 shadow-2xl shadow-indigo-950/20 ring-1 ring-slate-800">
        
        {/* Dynamic Island / Earpiece Notch */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 z-30">
          <div className="flex h-5 w-24 sm:w-28 items-center justify-between rounded-full bg-black px-2.5 shadow-inner">
            <div className="h-2 w-2 rounded-full bg-slate-800 ring-1 ring-slate-700"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-900/60 ring-1 ring-indigo-500/40"></div>
          </div>
        </div>

        {/* Screen Content Container */}
        <div className="relative flex flex-col h-[610px] w-full overflow-hidden rounded-[38px] bg-[#F8FAFC] text-slate-900">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-slate-800">
            <span>9:41</span>
            <div className="flex items-center space-x-1.5">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <div className="flex items-center">
                <span className="text-[10px] mr-0.5">98%</span>
                <Battery className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Toast Notification Alert */}
          {recordSuccess && (
            <div className="absolute top-12 left-4 right-4 z-40 animate-in fade-in slide-in-from-top-2 rounded-xl bg-indigo-600 p-2.5 text-center text-xs font-semibold text-white shadow-lg flex items-center justify-center space-x-1.5">
              <CheckCircle2 className="h-4 w-4 text-white shrink-0" />
              <span>{isBn ? `${recordSuccess}-এর কিস্তি পরিশোধ রেকর্ড হয়েছে!` : `Installment recorded for ${recordSuccess}!`}</span>
            </div>
          )}

          {/* App Header */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/dharsodh-icon.png"
                alt="DharSodh"
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl object-contain shadow-xs"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-none">
                  {isBn ? "ধারশোধ মোবাইল" : "DharSodh App"}
                </h4>
                <div className="flex items-center space-x-1 text-[10px] text-indigo-600 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{isBn ? "অফলাইন রেডি" : "Offline Ready"}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shadow-xs"
              >
                <Bell className="h-3.5 w-3.5" />
                <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-rose-500"></span>
              </button>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-800 border border-indigo-200">
                YA
              </div>
            </div>
          </div>

          {/* Scrollable Screen Body */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
            {/* Balance Card with Brand Indigo-Violet Gradient */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-[#4F46E5] via-[#4338CA] to-[#3730A3] p-4 text-white shadow-md shadow-indigo-900/20">
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
              
              <div className="flex items-center justify-between text-[11px] text-indigo-100 font-medium">
                <span>{isBn ? "মোট বকেয়া পাওনা" : "Net Receivable"}</span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] backdrop-blur-xs">
                  {isBn ? "অক্টোবর ২০২৬" : "Oct 2026"}
                </span>
              </div>

              <div className="mt-1 text-2xl font-extrabold tracking-tight">
                {formatCurrency(54200, lang)}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/20 pt-2.5 text-[10px]">
                <div>
                  <span className="text-indigo-200 block">{isBn ? "মোট ধার দেওয়া:" : "Lent:"}</span>
                  <span className="font-bold text-white text-xs">{formatCurrency(75400, lang)}</span>
                </div>
                <div>
                  <span className="text-indigo-200 block">{isBn ? "মোট ধার নেওয়া:" : "Borrowed:"}</span>
                  <span className="font-bold text-white text-xs">{formatCurrency(21200, lang)}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Floating Bar */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="flex flex-col items-center justify-center rounded-xl bg-white border border-slate-200/90 p-2 shadow-xs hover:border-indigo-500 transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-1">
                  <Plus className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-semibold text-slate-800">
                  {isBn ? "নতুন ধার" : "Add Loan"}
                </span>
              </button>

              <button
                type="button"
                className="flex flex-col items-center justify-center rounded-xl bg-white border border-slate-200/90 p-2 shadow-xs hover:border-emerald-500 transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-1">
                  <ArrowDownLeft className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-semibold text-slate-800">
                  {isBn ? "টাকা গ্রহণ" : "Receive"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleRecordPayment("তানভীর আহমেদ")}
                className="flex flex-col items-center justify-center rounded-xl bg-white border border-slate-200/90 p-2 shadow-xs hover:border-indigo-500 transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 mb-1">
                  <Receipt className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-800">
                  {isBn ? "কিস্তি গ্রহণ" : "Installment"}
                </span>
              </button>
            </div>

            {/* Active Borrowers List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-0.5">
                <span className="text-xs font-bold text-slate-800">
                  {isBn ? "সক্রিয় দেনাদার তালিকা" : "Active Borrowers"}
                </span>
                <span className="text-[10px] font-semibold text-indigo-600">
                  {isBn ? "সব দেখুন" : "View All"}
                </span>
              </div>

              <div className="space-y-2">
                {borrowers.map((borrower) => (
                  <div
                    key={borrower.id}
                    className="flex items-center justify-between rounded-xl bg-white border border-slate-200/80 p-2.5 shadow-xs transition-all hover:border-slate-300"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${borrower.bg}`}
                      >
                        {borrower.initials}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-slate-900 leading-tight">
                          {borrower.name}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {borrower.reason} • {borrower.phone}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-900">
                        {formatCurrency(borrower.amount, lang)}
                      </div>
                      <div className="mt-0.5 flex items-center justify-end space-x-1">
                        {borrower.isSettled ? (
                          <span className="inline-flex items-center text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            <CheckCircle2 className="h-2.5 w-2.5 mr-0.5" />
                            {borrower.daysLeft}
                          </span>
                        ) : borrower.isOverdue ? (
                          <span className="inline-flex items-center text-[9px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
                            <AlertCircle className="h-2.5 w-2.5 mr-0.5" />
                            {borrower.daysLeft}
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-[9px] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                            <Clock className="h-2.5 w-2.5 mr-0.5" />
                            {borrower.daysLeft}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offline SQLite Sync Status Pill */}
            <div className="rounded-xl border border-slate-200 bg-white p-2 flex items-center justify-between text-[10px] text-slate-500">
              <div className="flex items-center space-x-1.5">
                <Shield className="h-3.5 w-3.5 text-indigo-600" />
                <span>{isBn ? "লোকাল SQLite এনক্রিপ্টেড" : "Encrypted Local SQLite"}</span>
              </div>
              <span className="font-semibold text-indigo-600">v1.4.2</span>
            </div>
          </div>

          {/* Sleek Mobile Bottom Navigation */}
          <div className="border-t border-slate-200/80 bg-white px-3 py-1.5">
            <div className="flex items-center justify-around">
              <button
                type="button"
                onClick={() => setActiveNav("home")}
                className={`flex flex-col items-center py-1 px-2 ${
                  activeNav === "home" ? "text-indigo-600 font-bold" : "text-slate-400"
                }`}
              >
                <Home className="h-4 w-4" />
                <span className="text-[9px] mt-0.5">{isBn ? "হোম" : "Home"}</span>
                {activeNav === "home" && <span className="h-1 w-1 rounded-full bg-indigo-600 mt-0.5"></span>}
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("ledger")}
                className={`flex flex-col items-center py-1 px-2 ${
                  activeNav === "ledger" ? "text-indigo-600 font-bold" : "text-slate-400"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span className="text-[9px] mt-0.5">{isBn ? "খাতা" : "Ledger"}</span>
                {activeNav === "ledger" && <span className="h-1 w-1 rounded-full bg-indigo-600 mt-0.5"></span>}
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("reports")}
                className={`flex flex-col items-center py-1 px-2 ${
                  activeNav === "reports" ? "text-indigo-600 font-bold" : "text-slate-400"
                }`}
              >
                <PieChart className="h-4 w-4" />
                <span className="text-[9px] mt-0.5">{isBn ? "রিপোর্ট" : "Reports"}</span>
                {activeNav === "reports" && <span className="h-1 w-1 rounded-full bg-indigo-600 mt-0.5"></span>}
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("profile")}
                className={`flex flex-col items-center py-1 px-2 ${
                  activeNav === "profile" ? "text-indigo-600 font-bold" : "text-slate-400"
                }`}
              >
                <User className="h-4 w-4" />
                <span className="text-[9px] mt-0.5">{isBn ? "প্রোফাইল" : "Profile"}</span>
                {activeNav === "profile" && <span className="h-1 w-1 rounded-full bg-indigo-600 mt-0.5"></span>}
              </button>
            </div>

            {/* Android / iOS Home Indicator Pill */}
            <div className="mx-auto mt-1.5 h-1 w-28 rounded-full bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
