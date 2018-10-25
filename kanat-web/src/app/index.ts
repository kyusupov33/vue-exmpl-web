/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */
import Vue from "vue";
/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */
import "@/app/plugins/vue-worker.plugin";
import "@/app/plugins/logger.plugin";
import "@/app/plugins/noty.plugin";
import "@/app/plugins/axios.plugin";
import "@/app/plugins/vuetify.plugin";
import "@/app/plugins/vuex.plugin";
import { i18n } from "@/app/plugins/i18n.plugin";

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 */
import "@/styles/main.scss";

/* ============
 * Main App
 * ============
 *
 * Import the main application.
 */
import App from "@/app/App.vue";
import "@babel/polyfill";
import { appConfig } from "@/config/app.config";
import router from "@/app/router";
import { store } from "@/app/store";

Vue.config.productionTip = appConfig.env !== "Production";

new Vue({
  i18n,
  el: "#app",
  router,
  store,
  render: h => h(App)
});

const log = Vue.$createLogger("App - info");
log.info(`The environment is ${appConfig.env}.`);
log.info(`The language is set to ${i18n.locale}.`);
