import type { Metadata } from "next";
import { HomeView, getHomeMetadata } from "@/src/views/HomeView";
import { SiteLayout } from "@/src/components/SiteLayout";

export const metadata: Metadata = getHomeMetadata("bn");

export default function RootHomePage() {
  return (
    <SiteLayout lang="bn">
      <HomeView lang="bn" />
    </SiteLayout>
  );
}
