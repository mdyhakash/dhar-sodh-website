import type { Metadata } from "next";
import { PrivacyView, getPrivacyMetadata } from "@/src/views/PrivacyView";
import { SiteLayout } from "@/src/components/SiteLayout";

export const metadata: Metadata = getPrivacyMetadata("en");

export default function EnglishPrivacyPage() {
  return (
    <SiteLayout lang="en">
      <PrivacyView lang="en" />
    </SiteLayout>
  );
}
