import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Freeze extends Vue {
    @Prop() public visible: boolean;
}