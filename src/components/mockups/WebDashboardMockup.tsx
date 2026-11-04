"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { formatCurrency, formatNumber } from "@/src/lib/utils";
import type { Locale } from "@/src/dictionaries";

interface Props {
  lang: Locale;
  interactive?: boolean;
}

export function WebDashboardMockup({ lang, interactive = true }: Props) {
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "settled">("all");

  const isBn = lang === "bn";

  const transactions = [
    {
      id: "TX-902",
      name: isBn ? "তানভীর আহমেদ" : "Tanvir Ahmed",
      role: isBn ? "ব্যক্তিগত ঋণ" : "Personal Loan",
      avatar: "TA",
      avatarBg: "bg-indigo-100 text-indigo-800",
      type: "lent",
      typeLabel: isBn ? "ধার দেওয়া" : "Lent",
      amount: 25000,
      date: isBn ? "২৮ অক্টো, ২০২৬" : "Oct 28, 2026",
      dueDate: isBn ? "১৫ নভে, ২০২৬" : "Nov 15, 2026",
      status: "pending",
      statusLabel: isBn ? "বাকি আছে" : "Pending",
    },
    {
      id: "TX-901",
      name: isBn ? "রহিমুল ইসলাম" : "Rahimul Islam",
      role: isBn ? "ল্যাপটপ ক্রয় শেয়ার" : "Laptop Purchase Share",
      avatar: "RI",
      avatarBg: "bg-emerald-100 text-emerald-800",
      type: "lent",
      typeLabel: isBn ? "ধার দেওয়া" : "Lent",
      amount: 12000,
      date: isBn ? "২৫ অক্টো, ২০২৬" : "Oct 25, 2026",
      dueDate: isBn ? "৩০ অক্টো, ২০২৬" : "Oct 30, 2026",
      status: "settled",
      statusLabel: isBn ? "পরিশোধিত" : "Settled",
    },
    {
      id: "TX-899",
      name: isBn ? "তাসনিম ফারহানা" : "Tasnim Farhana",
      role: isBn ? "জরুরি মেডিকেল সাপোর্ট" : "Emergency Medical",
      avatar: "TF",
      avatarBg: "bg-purple-100 text-purple-800",
      type: "lent",
      typeLabel: isBn ? "ধার দেওয়া" : "Lent",
      amount: 18200,
      date: isBn ? "২০ অক্টো, ২০২৬" : "Oct 20, 2026",
      dueDate: isBn ? "০১ নভে, ২০২৬" : "Nov 01, 2026",
      status: "pending",
      statusLabel: isBn ? "বাকি আছে" : "Pending",
    },
    {
      id: "TX-895",
      name: isBn ? "কামরুল হাসান" : "Kamrul Hasan",
      role: isBn ? "অফিস ট্রিপ অ্যাডভান্স" : "Office Trip Advance",
      avatar: "KH",
      avatarBg: "bg-amber-100 text-amber-800",
      type: "borrowed",
      typeLabel: isBn ? "ধার নেওয়া" : "Borrowed",
      amount: 8000,
      date: isBn ? "১৫ অক্টো, ২০২৬" : "Oct 15, 2026",
      dueDate: isBn ? "২৫ অক্টো, ২০২৬" : "Oct 25, 2026",
      status: "settled",
      statusLabel: isBn ? "পরিশোধিত" : "Settled",
    },
    {
      id: "TX-890",
      name: isBn ? "সাজিদ করিম" : "Sajid Karim",
      role: isBn ? "অনলাইন কোর্স ফি" : "Online Course Fee",
      avatar: "SK",
      avatarBg: "bg-rose-100 text-rose-800",
      type: "lent",
      typeLabel: isBn ? "ধার দেওয়া" : "Lent",
      amount: 5000,
      date: isBn ? "১০ অক্টো, ২০২৬" : "Oct 10, 2026",
      dueDate: isBn ? "২০ অক্টো, ২০২৬" : "Oct 20, 2026",
      status: "overdue",
      statusLabel: isBn ? "মেয়াদোত্তীর্ণ" : "Overdue",
    },
  ];

  const filteredTransactions = transactions.filter((item) => {
    if (activeTab === "pending" && item.status !== "pending" && item.status !== "overdue") return false;
    if (activeTab === "settled" && item.status !== "settled") return false;
    return true;
  });

  return (
    <div className="w-full rounded-2xl md:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-indigo-950/10 overflow-hidden font-sans transition-all duration-300">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/90 px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/90 inline-block shadow-sm"></span>
            <span className="h-3 w-3 rounded-full bg-amber-400/90 inline-block shadow-sm"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/90 inline-block shadow-sm"></span>
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 ml-3 pl-3 border-l border-slate-200 text-xs text-slate-500">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" />
            <span className="font-mono text-[11px] text-slate-600">https://dhar-sodh.vercel.app/dashboard</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center rounded-lg bg-indigo-50 border border-indigo-200/70 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
            {isBn ? "লাইভ সিঙ্ক চালু" : "Cloud Sync Active"}
          </div>
          <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-800">
            YA
          </div>
        </div>
      </div>

      {/* Internal Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-100 bg-white px-4 py-3 sm:px-6">
        <div className="flex items-center space-x-3">
          <Image
            src="/dharsodh-icon.png"
            alt="DharSodh"
            width={32}
            height={32}
            className="h-8 w-8 rounded-xl object-contain shadow-xs"
          />
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-none">
              {isBn ? "ধারশোধ ক্লাউড পোর্টাল" : "DharSodh Cloud"}
            </h4>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {isBn ? "ব্যক্তিগত লেজার খাতা • তানভীর" : "Personal Ledger • Tanvir"}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              readOnly
              value=""
              placeholder={isBn ? "খুঁজুন..." : "Search..."}
              className="h-7.5 w-28 sm:w-44 rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="flex h-7.5 items-center space-x-1 rounded-lg bg-indigo-600 px-2.5 text-xs font-medium text-white shadow-xs hover:bg-indigo-700"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{isBn ? "নতুন হিসাব" : "New Entry"}</span>
          </button>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-4 sm:p-6 bg-[#F8FAFC] space-y-5">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Total Lent */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 sm:p-4 shadow-sm hover:border-indigo-300 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                {isBn ? "মোট ধার দেওয়া" : "Total Lent"}
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {formatCurrency(75400, lang)}
              </span>
              <span className="inline-flex items-center text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                +14.2%
              </span>
            </div>
            <div className="mt-2 flex items-center text-[11px] text-slate-400">
              <Clock className="h-3 w-3 mr-1 text-slate-400" />
              <span>{isBn ? "৫ জনের কাছে চলমান ঋণ" : "5 Active borrowers"}</span>
            </div>
          </div>

          {/* Total Borrowed / Due */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 sm:p-4 shadow-sm hover:border-rose-300 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                {isBn ? "মোট ধার নেওয়া (দেনা)" : "Total Borrowed"}
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                <ArrowDownLeft className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {formatCurrency(21200, lang)}
              </span>
              <span className="inline-flex items-center text-[11px] font-semibold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                -3.8%
              </span>
            </div>
            <div className="mt-2 flex items-center text-[11px] text-slate-400">
              <CheckCircle2 className="h-3 w-3 mr-1 text-emerald-500" />
              <span>{isBn ? "১টি কিস্তি পরিশোধ হয়েছে" : "1 Repayment cleared"}</span>
            </div>
          </div>

          {/* Net Outstanding Balance */}
          <div className="rounded-xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/60 p-3.5 sm:p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-indigo-900">
                {isBn ? "মোট নিট বকেয়া (প্রাপ্য)" : "Net Receivable"}
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs">
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-indigo-950">
                {formatCurrency(54200, lang)}
              </span>
              <span className="inline-flex items-center text-[11px] font-semibold text-indigo-800 bg-indigo-100/90 px-1.5 py-0.5 rounded">
                {isBn ? "৮২% নিরাপদ" : "82% Healthy"}
              </span>
            </div>
            <div className="mt-2 flex items-center text-[11px] text-indigo-700">
              <AlertCircle className="h-3 w-3 mr-1 text-indigo-600" />
              <span>{isBn ? "৩ জনের পরিশোধের সময় আসন্ন" : "3 Repayments due soon"}</span>
            </div>
          </div>
        </div>

        {/* Graphical Ledger Analytics Bar */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                {isBn ? "মাসিক লেনদেন ও আদায়ের গতিপ্রকৃতি" : "Monthly Lending vs Recovery"}
              </h5>
              <p className="text-[11px] text-slate-400">
                {isBn ? "গত ৬ মাসের মোট লেনদেন বিশ্লেষণ" : "Trend overview of previous 6 months"}
              </p>
            </div>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="flex items-center text-slate-600">
                <span className="h-2 w-2 rounded-full bg-indigo-600 mr-1.5"></span>
                {isBn ? "ধার প্রদান" : "Lent"}
              </span>
              <span className="flex items-center text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-1.5"></span>
                {isBn ? "আদায় সম্পন্ন" : "Recovered"}
              </span>
            </div>
          </div>

          {/* Bar Chart Mockup with Brand Colors */}
          <div className="grid grid-cols-6 gap-2 sm:gap-4 items-end h-28 pt-4 border-b border-slate-100">
            {[
              { month: isBn ? "মে" : "May", lent: 60, recovered: 45, current: false },
              { month: isBn ? "জুন" : "Jun", lent: 40, recovered: 35, current: false },
              { month: isBn ? "জুলাই" : "Jul", lent: 75, recovered: 60, current: false },
              { month: isBn ? "আগস্ট" : "Aug", lent: 50, recovered: 50, current: false },
              { month: isBn ? "সেপ্টে" : "Sep", lent: 85, recovered: 70, current: false },
              { month: isBn ? "অক্টো" : "Oct", lent: 95, recovered: 80, current: true },
            ].map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center h-full justify-end group">
                <div className="w-full max-w-[28px] sm:max-w-[40px] flex items-end justify-center space-x-1 h-full">
                  <div
                    style={{ height: `${bar.lent}%` }}
                    className={`w-3 sm:w-4 rounded-t transition-all ${
                      bar.current ? "bg-indigo-600 shadow-sm" : "bg-indigo-500/70 group-hover:bg-indigo-600"
                    }`}
                  ></div>
                  <div
                    style={{ height: `${bar.recovered}%` }}
                    className={`w-3 sm:w-4 rounded-t transition-all ${
                      bar.current ? "bg-emerald-500" : "bg-emerald-400/70 group-hover:bg-emerald-500"
                    }`}
                  ></div>
                </div>
                <span className={`text-[10px] mt-1.5 font-medium ${bar.current ? "text-indigo-700 font-bold" : "text-slate-400"}`}>
                  {bar.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="rounded-xl border border-slate-200/80 bg-white overflow-hidden shadow-sm">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 px-4 py-3 bg-slate-50/50">
            <div className="flex items-center space-x-2">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                {isBn ? "সাম্প্রতিক হিসাব খাতা" : "Recent Ledger Activity"}
              </h5>
              <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                {formatNumber(transactions.length, lang)}
              </span>
            </div>

            {/* Filter Tabs */}
            {interactive && (
              <div className="flex items-center rounded-lg bg-slate-100 p-0.5 text-xs mt-2 sm:mt-0">
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    activeTab === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {isBn ? "সব" : "All"}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("pending")}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    activeTab === "pending" ? "bg-white text-indigo-700 font-bold shadow-xs" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {isBn ? "বাকি" : "Pending"}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("settled")}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    activeTab === "settled" ? "bg-white text-emerald-700 font-bold shadow-xs" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {isBn ? "পরিশোধিত" : "Settled"}
                </button>
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 text-[11px] font-semibold uppercase text-slate-400 border-b border-slate-100">
                <tr>
                  <th className="py-2.5 px-4">{isBn ? "ব্যক্তি ও বিবরণ" : "Recipient & Note"}</th>
                  <th className="py-2.5 px-3 hidden sm:table-cell">{isBn ? "ধরন" : "Type"}</th>
                  <th className="py-2.5 px-3">{isBn ? "পরিমাণ" : "Amount"}</th>
                  <th className="py-2.5 px-3 hidden md:table-cell">{isBn ? "তারিখ" : "Date"}</th>
                  <th className="py-2.5 px-4 text-right">{isBn ? "অবস্থা" : "Status"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2.5">
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold ${tx.avatarBg}`}
                        >
                          {tx.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">{tx.name}</div>
                          <div className="text-[10px] text-slate-400">{tx.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 hidden sm:table-cell">
                      <span
                        className={`inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          tx.type === "lent"
                            ? "bg-indigo-50 text-indigo-700 border border-indigo-200/50"
                            : "bg-rose-50 text-rose-700 border border-rose-200/50"
                        }`}
                      >
                        {tx.typeLabel}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900">
                      {formatCurrency(tx.amount, lang)}
                    </td>
                    <td className="py-3 px-3 hidden md:table-cell text-[11px] text-slate-500">
                      {tx.date}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {tx.status === "settled" && (
                        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200/60">
                          <CheckCircle2 className="mr-1 h-3 w-3 text-emerald-600" />
                          {tx.statusLabel}
                        </span>
                      )}
                      {tx.status === "pending" && (
                        <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 border border-amber-200/60">
                          <Clock className="mr-1 h-3 w-3 text-amber-600" />
                          {tx.statusLabel}
                        </span>
                      )}
                      {tx.status === "overdue" && (
                        <span className="inline-flex items-center rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-700 border border-rose-200/60">
                          <AlertCircle className="mr-1 h-3 w-3 text-rose-600" />
                          {tx.statusLabel}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
