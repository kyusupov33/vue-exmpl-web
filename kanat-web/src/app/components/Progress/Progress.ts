import {Component, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class ProgressComponent extends Vue {
    @Prop() private progressField: boolean;
}