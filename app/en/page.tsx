import type { Metadata } from "next";
import { HomeView, getHomeMetadata } from "@/src/views/HomeView";
import { SiteLayout } from "@/src/components/SiteLayout";

export const metadata: Metadata = getHomeMetadata("en");

export default function EnglishHomePage() {
  return (
    <SiteLayout lang="en">
      <HomeView lang="en" />
    </SiteLayout>
  );
}
