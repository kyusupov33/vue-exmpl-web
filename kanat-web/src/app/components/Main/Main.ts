import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/app/components/NavBar/NavBar";
import { Getter } from "vuex-class";
import { RopeGetters } from "@/app/store/modules/rope";
import Freeze from "@/app/components/Freeze/Freeze";
import { FreezeGetters } from "@/app/store/modules/freeze";

interface BeforeRouteUpdate {
  beforeRouteUpdate(to: any, from: any, next: any): any;
}

Component.registerHooks(["beforeRouteUpdate"]);

@Component({
  components: {
    NavBar,
    Freeze
  }
})
export default class Main extends Vue implements BeforeRouteUpdate {
  @Getter(RopeGetters.GetOrganizationRU)
  public company: string;

  @Getter(FreezeGetters.GetFreeze)
  public freeze: boolean;

  private drawer: boolean = true;
  private footerHeight: number = 64;

  beforeRouteUpdate(to: any, from: any, next: any) {
    this.drawer = to.path === "/";
    next();
  }
}
