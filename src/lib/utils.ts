export function toBengaliDigits(input: string | number): string {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(input).replace(/[0-9]/g, (match) => bengaliDigits[parseInt(match, 10)]);
}

export function formatNumber(
  value: number | string,
  lang: "bn" | "en" = "bn",
  options?: Intl.NumberFormatOptions
): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return String(value);

  if (lang === "bn") {
    try {
      return new Intl.NumberFormat("bn-BD", options).format(num);
    } catch {
      return toBengaliDigits(num);
    }
  }

  return new Intl.NumberFormat("en-US", options).format(num);
}

export function formatCurrency(
  amount: number,
  lang: "bn" | "en" = "bn"
): string {
  const formatted = formatNumber(amount, lang, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return lang === "bn" ? `৳ ${formatted}` : `৳ ${formatted}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns localized URL path:
 * Default locale is "bn", so its URLs don't have /bn prefix (e.g. "/" or "/privacy" or "/#features").
 * English locale has "/en" prefix (e.g. "/en" or "/en/privacy" or "/en#features").
 */
export function getLocalizedHref(lang: "bn" | "en", path: string = ""): string {
  if (lang === "bn") {
    if (!path || path === "/") return "/";
    if (path.startsWith("#")) return `/#${path.replace(/^#/, "")}`;
    return path.startsWith("/") ? path : `/${path}`;
  }
  // English
  if (!path || path === "/") return "/en";
  if (path.startsWith("#")) return `/en#${path.replace(/^#/, "")}`;
  return `/en${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Calculates the switch target path:
 * - If on Bengali ("/" or "/privacy"), target is "/en" or "/en/privacy"
 * - If on English ("/en" or "/en/privacy"), target is "/" or "/privacy" (no /bn in URL)
 */
export function getLanguageSwitchPath(currentLang: "bn" | "en", pathname: string = ""): string {
  const isPrivacy = pathname.includes("/privacy");
  if (currentLang === "bn") {
    return isPrivacy ? "/en/privacy" : "/en";
  } else {
    return isPrivacy ? "/privacy" : "/";
  }
}
