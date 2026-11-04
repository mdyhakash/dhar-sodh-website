import { bn } from "./bn";
import { en } from "./en";

export type Locale = "bn" | "en";
export type Dictionary = typeof bn;

export const dictionaries = {
  bn,
  en,
};

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang] || dictionaries.bn;
}

