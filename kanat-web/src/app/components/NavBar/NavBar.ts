import { links } from "@/app/constants/links";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  public links: any[] = links;
}
