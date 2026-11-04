"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/src/config/site";
import type { Locale } from "@/src/dictionaries";

export interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
}

export interface GitHubReleaseItem {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  target_commitish: string;
  assets: GitHubAsset[];
}

export interface ReleaseDisplayData {
  version: string;
  tag: string;
  downloadUrl: string;
  apkFilename: string;
  fileSize: string;
  releaseDate: string;
  commit: string;
  notes: string;
  isLive: boolean;
}

export function useGitHubRelease(lang: Locale = "bn") {
  const [latestRelease, setLatestRelease] = useState<ReleaseDisplayData>({
    version: siteConfig.latestRelease.version,
    tag: siteConfig.latestRelease.tag,
    downloadUrl: siteConfig.latestRelease.downloadUrl,
    apkFilename: siteConfig.latestRelease.apkFilename,
    fileSize: siteConfig.latestRelease.fileSize,
    releaseDate: siteConfig.latestRelease.releaseDate,
    commit: "7a4e921",
    notes: siteConfig.latestRelease.changelog[lang]?.[0] || "",
    isLive: false,
  });

  const [allReleases, setAllReleases] = useState<ReleaseDisplayData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchReleases() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${siteConfig.github.repo}/releases`
        );
        if (!res.ok) return;

        const data: GitHubReleaseItem[] = await res.json();
        if (!Array.isArray(data) || data.length === 0) return;

        const formattedList: ReleaseDisplayData[] = data.map((rel) => {
          const apkAsset = rel.assets?.find((a) => a.name.endsWith(".apk"));
          const sizeMb = apkAsset
            ? `${(apkAsset.size / (1024 * 1024)).toFixed(1)} MB`
            : siteConfig.latestRelease.fileSize;

          const dateObj = new Date(rel.published_at || Date.now());
          const dateStr = dateObj.toLocaleDateString(
            lang === "bn" ? "bn-BD" : "en-US",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          );

          return {
            version: rel.name || rel.tag_name,
            tag: rel.tag_name,
            downloadUrl:
              apkAsset?.browser_download_url ||
              `${siteConfig.github.releasesUrl}/tag/${rel.tag_name}`,
            apkFilename: apkAsset?.name || `DharSodh-${rel.tag_name}.apk`,
            fileSize: sizeMb,
            releaseDate: dateStr,
            commit: rel.target_commitish ? rel.target_commitish.substring(0, 7) : "main",
            notes: rel.body?.split("\n")?.[0] || (lang === "bn" ? "রিলিজের বিবরণ" : "Release details"),
            isLive: true,
          };
        });

        if (isMounted && formattedList.length > 0) {
          setLatestRelease(formattedList[0]);
          setAllReleases(formattedList);
        }
      } catch {
        // Graceful fallback to static siteConfig values
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchReleases();

    return () => {
      isMounted = false;
    };
  }, [lang]);

  return {
    latestRelease,
    allReleases,
    loading,
  };
}
