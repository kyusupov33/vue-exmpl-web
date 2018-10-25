import Vue from "vue";
import { PluginObject } from "vue";
import SWorker from "simple-web-worker";

export const VueWorker: PluginObject<any> = {
  install(VueInstance): void {
    VueInstance.$worker = SWorker as any;
    VueInstance.prototype.$worker = SWorker as any;
  }
};

Vue.use(VueWorker);
