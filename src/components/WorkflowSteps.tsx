"use client";

import React, { useState, useRef, useEffect } from "react";
import type { Locale, Dictionary } from "@/src/dictionaries";
import { siteConfig } from "@/src/config/site";
import { Play, UserCheck, Edit3, CheckCheck } from "lucide-react";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-pause video when scrolled out of view
  useEffect(() => {
    if (!isPlaying) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.25, // Pauses when less than 25% of the video section is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

  const handleStartPlay = () => {
    setIsPlaying(true);
    // Ensure video plays with audio on user interaction
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Fallback in case of browser restriction
        });
      }
    }, 100);
  };

  const stepIcons = [
    <UserCheck key="1" className="h-6 w-6 text-indigo-600" />,
    <Edit3 key="2" className="h-6 w-6 text-indigo-600" />,
    <CheckCheck key="3" className="h-6 w-6 text-indigo-600" />,
  ];

  return (
    <section id="workflow" className="pt-4 pb-20 md:pt-6 md:pb-28 bg-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 to-white -z-10" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            {dict.workflow.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {dict.workflow.subtitle}
          </p>
        </div>

        {/* Video Player Container */}
        <div ref={containerRef} className="max-w-4xl mx-auto mb-14 md:mb-18">
          <div className="relative group">
            
            {/* Ambient Ambient Glow behind player */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-indigo-600/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

            {/* Video Box Frame */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#0A0F1D] border border-slate-800 shadow-2xl">
              
              {/* Clean Minimal Top Bar with 3 Window Dots */}
              <div className="h-8 bg-slate-900/90 border-b border-slate-800/80 px-4 flex items-center select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
              </div>

              {/* Player Area: 16:9 Aspect Ratio */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {!isPlaying ? (
                  /* Initial State: Poster + Play Button Overlay */
                  <div
                    onClick={handleStartPlay}
                    className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center transition-all duration-300"
                    role="button"
                    tabIndex={0}
                    aria-label="Play video"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleStartPlay();
                      }
                    }}
                  >
                    {/* Poster Image or High-tech Dark Backdrop */}
                    {siteConfig.demoVideo.poster ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={siteConfig.demoVideo.poster}
                        alt="DharSodh Demo Video"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B1120] to-indigo-950/90">
                        {/* Decorative UI Blueprint Lines */}
                        <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
                        
                        {/* Large Watermark in Background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
                          <span className="text-8xl md:text-9xl font-black text-white tracking-widest">
                            DHARSODH
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Gradient Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-slate-950/30 group-hover:via-slate-950/10 transition-all duration-300" />

                    {/* Prominent Clean Center Play Button */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="relative">
                        {/* Pulsing Outer Ring */}
                        <div className="absolute -inset-3 rounded-full bg-indigo-500/30 animate-ping group-hover:bg-indigo-500/50" />
                        <div className="absolute -inset-1 rounded-full bg-indigo-600/40 blur-xs" />

                        {/* Central Play Button */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/50 group-hover:scale-110 active:scale-95 transition-transform duration-300">
                          <Play className="h-9 w-9 sm:h-10 sm:w-10 fill-white text-white ml-1.5 transition-transform group-hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Playing State: Embedded HTML5 Video with Full Controls */
                  <video
                    ref={videoRef}
                    src={siteConfig.demoVideo.url}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 3-Step Horizontal Track */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 -z-0" />

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
                    ? isBn ? "সহজ সাইন-ইন ও অফলাইন" : "Easy Login & Offline"
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
