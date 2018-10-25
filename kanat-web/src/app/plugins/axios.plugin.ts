import Vue, { PluginObject } from "vue";

import Axios from "axios";

const logger = Vue.$createLogger("DEBUG");

import { store } from "@/app/store";
import { appConfig } from "@/config/app.config";

Axios.defaults.baseURL = appConfig.apiPath.startsWith("http")
  ? appConfig.apiPath
  : `${window.location.origin}${appConfig.apiPath}`;

Axios.interceptors.request.use(
  request => {
    if (request.data) {
      logger.info("[HTTP Request]:", request.method, request.url, request.data);
    }
    return Promise.resolve(request);
  },
  error => {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  response => {
    if (response) {
      logger.info("[HTTP Response]:", response.config.method, response.config.url, response.status, response.data);
    }
    return Promise.resolve(response);
  },
  error => {
    if (error.response) {
      logger.error("[HTTP Response Error]:", error.response.config.method, error.response.config.url, error.response.status, error.response.data);
    }
    return Promise.reject(error);
  }
);

export const Http: PluginObject<any> = {
  install(VueInstance): void {
    VueInstance.$http = Axios;
    VueInstance.prototype.$http = Axios;
  }
};

Vue.use(Http);
