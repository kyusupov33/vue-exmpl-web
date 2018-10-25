<template>
    <div>
        <v-fade-transition mode="out-in">
            <router-view></router-view>
        </v-fade-transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "@/app/components/Main/Main";
import { RopeActions } from "./store/modules/rope";
const log = Vue.$createLogger("App");
@Component({
  components: {
    Main
  }
})
export default class App extends Vue {
  constructor() {
    super();
    this.Initialize()
      .then(() => {
        log.info("Application initialize!");
      })
      .catch(err => {
        log.warn(`Error - ${err}`);
      });
  }

  private async Initialize() {
    await this.$store.dispatch(RopeActions.GetRopes);
  }
}
</script>
