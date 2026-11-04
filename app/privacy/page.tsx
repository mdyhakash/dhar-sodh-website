import type { Metadata } from "next";
import { PrivacyView, getPrivacyMetadata } from "@/src/views/PrivacyView";
import { SiteLayout } from "@/src/components/SiteLayout";

export const metadata: Metadata = getPrivacyMetadata("bn");

export default function RootPrivacyPage() {
  return (
    <SiteLayout lang="bn">
      <PrivacyView lang="bn" />
    </SiteLayout>
  );
}
