export interface SiteConfig {
  name: {
    bn: string;
    en: string;
  };
  tagline: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  url: string;
  webAppUrl: string;
  github: {
    repo: string;
    url: string;
    releasesUrl: string;
    stars: string;
  };
  latestRelease: {
    version: string;
    versionCode: number;
    tag: string;
    releaseDate: string;
    fileSize: string;
    minAndroid: string;
    sha256: string;
    downloadUrl: string;
    apkFilename: string;
    changelog: {
      bn: string[];
      en: string[];
    };
  };
  author: {
    name: string;
    url: string;
    github: string;
    email: string;
  };
  stats: {
    activeUsers: { bn: string; en: string };
    totalTransactions: { bn: string; en: string };
    appRating: string;
    openSource: string;
  };
}

export const siteConfig: SiteConfig = {
  name: {
    bn: "ধারশোধ",
    en: "DharSodh",
  },
  tagline: {
    bn: "ধার-দেনা ও বাকির হিসাব রাখার স্মার্ট ও নির্ভরযোগ্য ডিজিটাল সমাধান",
    en: "Smart, reliable personal lending and ledger tracking for everyone",
  },
  description: {
    bn: "কাউকে টাকা ধার দিলেন বা কারও কাছ থেকে ধার নিলেন? DharSodh (ধারশোধ) এর মাধ্যমে ওয়েব ও অ্যান্ড্রয়েড মোবাইল অ্যাপে সহজে ট্র্যাক করুন দেনা-পাওনা, কিস্তিতে পরিশোধ এবং লেনদেনের পূর্ণাঙ্গ ইতিহাস।",
    en: "Lent money to someone or borrowed for a need? DharSodh provides unified Web and Android tracking for personal credit, installment repayments, transaction logs, and real-time offline ledgers.",
  },
  url: "https://dhar-sodh.vercel.app",
  webAppUrl: "https://dhar-sodh.vercel.app/",
  github: {
    repo: "mdyhakash/dhar-sodh-website",
    url: "https://github.com/mdyhakash/dhar-sodh-website",
    releasesUrl: "https://github.com/mdyhakash/dhar-sodh-website/releases",
    stars: "1.2k+",
  },
  latestRelease: {
    version: "v1.4.2",
    versionCode: 142,
    tag: "v1.4.2-stable",
    releaseDate: "2026-10-24",
    fileSize: "14.8 MB",
    minAndroid: "Android 7.0+",
    sha256: "8f7e2a9104b2c1d3e895c249a0bb3c271e846394142f10b7cd8312e0964fb182",
    downloadUrl: "https://github.com/mdyhakash/dhar-sodh-website/releases/latest/download/DharSodh-v1.4.2.apk",
    apkFilename: "DharSodh-v1.4.2-release.apk",
    changelog: {
      bn: [
        "নতুন দ্রুত লেনদেন ডায়ালগ এবং ক্যাটাগরি ফিল্টার",
        "সম্পূর্ণ অফলাইন মোডে ক্যাশিং এবং অটো ব্যাকআপ ইঞ্জিন",
        "বাংলা ও ইংরেজি সংখ্যার স্মার্ট মুদ্রা গণক (৳)",
        "আংশিক ও কিস্তিতে লেনদেন পরিশোধের সহজ ট্র্যাকিং",
      ],
      en: [
        "New quick transaction modal with smart category filters",
        "Enhanced offline-first local caching and SQLite automatic sync engine",
        "Automated dual currency and Bengali numerals (৳) parser",
        "Flexible partial settlement and installment repayment tracking",
      ],
    },
  },
  author: {
    name: "Md Yasin Hossain Akash",
    url: "https://mdyhakash.vercel.app",
    github: "https://github.com/mdyhakash",
    email: "mdyhakash@gmail.com",
  },
  stats: {
    activeUsers: { bn: "১৫,০০০+ সক্রিয় ব্যবহারকারী", en: "15,000+ Active Users" },
    totalTransactions: { bn: "৳ ২৫+ কোটি হিসাব ট্র্যাকিং", en: "৳ 250M+ Managed Debts" },
    appRating: "4.9 / 5.0",
    openSource: "100% Free & Open Source",
  },
};
