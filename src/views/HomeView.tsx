import React from "react";
import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/src/dictionaries";
import { siteConfig } from "@/src/config/site";
import { Hero } from "@/src/components/Hero";
import { FeaturesMatrix } from "@/src/components/FeaturesMatrix";
import { ComponentPreviews } from "@/src/components/ComponentPreviews";
import { WorkflowSteps } from "@/src/components/WorkflowSteps";
import { InstallGuide } from "@/src/components/InstallGuide";
import { PricingReleases } from "@/src/components/PricingReleases";
import { FaqAccordion } from "@/src/components/FaqAccordion";
import { CtaBanner } from "@/src/components/CtaBanner";

export function getHomeMetadata(lang: Locale): Metadata {
  const isBn = lang === "bn";

  const title = isBn
    ? `${siteConfig.name.bn} (${siteConfig.name.en}) - ${siteConfig.tagline.bn}`
    : `${siteConfig.name.en} (${siteConfig.name.bn}) - ${siteConfig.tagline.en}`;

  const description = isBn ? siteConfig.description.bn : siteConfig.description.en;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: isBn ? "bn_BD" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: isBn ? "/" : "/en",
      languages: {
        bn: "/",
        en: "/en",
      },
    },
  };
}

export function HomeView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <FeaturesMatrix lang={lang} dict={dict} />
      <ComponentPreviews lang={lang} dict={dict} />
      <WorkflowSteps lang={lang} dict={dict} />
      <InstallGuide lang={lang} dict={dict} />
      <PricingReleases lang={lang} dict={dict} />
      <FaqAccordion lang={lang} dict={dict} />
      <CtaBanner lang={lang} dict={dict} />
    </>
  );
}
