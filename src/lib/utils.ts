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

