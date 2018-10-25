import Vue from "vue";
import Noty from "noty";
import { AxiosInstance } from "axios";

import {
  PluginFunction,
  PluginObject,
  VueConstructor,
  DirectiveOptions
} from "vue";
import { VuetifyLanguage } from "./lang";
import "./alacarte";

declare const Vuetify: Vuetify;
export = Vuetify;
export interface Vuetify {
  install: PluginFunction<VuetifyUseOptions>;
  version: string;
}

export type VuetifyDirective = DirectiveOptions & { name: string };

export interface VuetifyUseOptions {
  transitions?: Record<string, VueConstructor>;
  directives?: Record<string, VuetifyDirective>;
  components?: Record<string, PluginObject<any> | PluginFunction<never>>;
  theme?: Partial<VuetifyTheme> | false;
  iconfont?: "md" | "mdi" | "fa" | "fa4";
  icons?: Partial<VuetifyIcons>;
  options?: Partial<VuetifyOptions>;
  lang?: Partial<VuetifyLanguage>;
  rtl?: boolean;
}

export interface VuetifyObject extends Vue {
  readonly breakpoint: Readonly<VuetifyBreakpoint>;
  readonly dark: boolean;
  readonly goTo: <T extends string | number | HTMLElement | Vue>(
    target: T,
    options?: VuetifyGoToOptions
  ) => Promise<T>;
  readonly t: VuetifyLanguage["t"];
  application: VuetifyApplication;
  theme: VuetifyTheme;
  icons: VuetifyIcons;
  lang: VuetifyLanguage;
  options: VuetifyOptions;
  rtl: boolean;
}

export interface VuetifyIcons {
  [name: string]: string;
  cancel: string;
  close: string;
  delete: string;
  clear: string;
  success: string;
  info: string;
  warning: string;
  error: string;
  prev: string;
  next: string;
  checkboxOn: string;
  checkboxOff: string;
  checkboxIndeterminate: string;
  delimiter: string;
  sort: string;
  expand: string;
  menu: string;
  subgroup: string;
  dropdown: string;
  radioOn: string;
  radioOff: string;
  edit: string;
}

export interface VuetifyApplication {
  bar: number;
  bottom: number;
  footer: number;
  left: number;
  right: number;
  top: number;
  bind(uid: number, target: string, value: number): void;
  unbind(uid: number, target: string): void;
  update(target: string): void;
}

export interface VuetifyBreakpoint {
  height: number;
  lg: boolean;
  lgAndDown: boolean;
  lgAndUp: boolean;
  lgOnly: boolean;
  md: boolean;
  mdAndDown: boolean;
  mdAndUp: boolean;
  mdOnly: boolean;
  name: string;
  sm: boolean;
  smAndDown: boolean;
  smAndUp: boolean;
  smOnly: boolean;
  width: number;
  xl: boolean;
  xlOnly: boolean;
  xs: boolean;
  xsOnly: boolean;
}

export type VuetifyThemeItem = string | number;

export interface VuetifyTheme {
  [name: string]: VuetifyThemeItem;
  primary: VuetifyThemeItem;
  accent: VuetifyThemeItem;
  secondary: VuetifyThemeItem;
  info: VuetifyThemeItem;
  warning: VuetifyThemeItem;
  error: VuetifyThemeItem;
  success: VuetifyThemeItem;
}

export interface VuetifyThemeCache {
  get: (parsedTheme: VuetifyTheme) => string | null;
  set: (parsedTheme: VuetifyTheme, css: string) => void;
}

export interface VuetifyOptions {
  themeVariations: string[];
  minifyTheme: ((css: string) => string) | null;
  themeCache: VuetifyThemeCache | null;
  cspNonce: string | null;
}

export type VuetifyGoToEasing =
  | ((t: number) => number)
  | "linear"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic"
  | "easeInQuart"
  | "easeOutQuart"
  | "easeInOutQuart"
  | "easeInQuint"
  | "easeOutQuint"
  | "easeInOutQuint";

export interface VuetifyGoToOptions {
  duration?: number;
  offset?: number;
  easing?: VuetifyGoToEasing;
}

declare module "vue/types/vue" {
  export interface VueWebWorker {
    run<T>(worker: (...a: any[]) => any, args: any[]): Promise<T>;
  }

  export interface INoty {
    alert: (translationKey: string) => Noty;
    success: (translationKey: string) => Noty;
    warning: (translationKey: string) => Noty;
    error: (translationKey: string) => Noty;
    info: (translationKey: string) => Noty;
  }

  export interface VueConstructor {
    $createLogger: (channelOrClass: string | any) => ILogger;
    $http: AxiosInstance;
    $worker: VueWebWorker;
    $vuetify: VuetifyObject;
  }

  export interface Vue {
    $createLogger: (channelOrClass: string | any) => ILogger;
    $noty: INoty;
    $http: AxiosInstance;
    $worker: VueWebWorker;
    $vuetify: VuetifyObject;
  }
}
