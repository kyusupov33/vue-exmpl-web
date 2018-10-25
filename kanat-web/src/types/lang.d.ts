export interface VuetifyLanguage {
  locales: Record<string, VuetifyLocale>;
  current: string;
  t(key: string, ...params: Array<string | number>): string;
}

export interface VuetifyLocale {
  [key: string]: VuetifyLocale | string;
}
