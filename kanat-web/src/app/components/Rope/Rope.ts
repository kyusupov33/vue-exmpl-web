import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { RopeActions, RopeGetters } from "@/app/store/modules/rope";
import { Rope } from "@/app/models/Rope";
import {
  ropeTableHeaders,
  RopeTableHeadersImpl,
  ropeCellsField,
  RopeCellsFieldImpl
} from "@/app/constants/ropeTable";
import { newRopeFields } from "@/app/constants/newRope";
import ProgressComponent from "@/app/components/Progress/Progress";

@Component({
  components: {
    ProgressComponent
  }
})
export default class RopeComponent extends Vue {
  @Getter(RopeGetters.GetRope) public ropes: Rope[];
  @Getter(RopeGetters.IsLoading) private loading: boolean;
  @Getter(RopeGetters.GetAllowedActions) public allowedActions: string[];
  @Action(RopeActions.AddRope) private addRope: (newRope: Rope) => Promise<any>;
  private log = Vue.$createLogger("RopePage");
  private headers: RopeTableHeadersImpl = ropeTableHeaders;
  private ropeFields: RopeCellsFieldImpl = ropeCellsField;
  private ropeDialogFields: any = newRopeFields;
  private newRope: any = new Rope();
  private dialog: boolean = false;
  private search: string = "";
  private valid: boolean = false;
  private fieldRules: any[] = [
    (v: any) => !!v || "Пожалуйста, заполните поле!"
  ];
  private newRopeLoading: boolean = false;
  private pagination: any = {
    rowsPerPage: 10,
    totalItems: 1
  };
  private selected: any[] = [];

  public async openOperations(item: any): Promise<void> {
    this.$router.replace({
      name: "rope-operations",
      params: { id: item.cableInfo }
    });
  }

  public get pages() {
    return this.pagination.rowsPerPage
      ? Math.ceil(this.ropes.length / this.pagination.rowsPerPage)
      : 0;
  }

  public close(): void {
    this.dialog = false;
  }

  public async createNewRope(): Promise<any> {
    await this.addRope(this.newRope)
      .then((res: any) => {
          this.$noty.success(
            `<div style="margin: 20px">
               Канат успешно добавлен!<br />
               <br />
               <strong>Время:</strong> ${res.time}<br />
               <strong>ID транзакции:</strong>  ${res.txid}<br />
               <strong>Подписи:</strong><br />
               &nbsp;&nbsp;&nbsp;${res.signs.join("<br/>&nbsp;&nbsp;&nbsp;")}
            </div>`
          );
      })
      .catch((err: any) => {
        if(err.response && err.response.data)
          this.$noty.error(`
            Ошибка при создании каната:<br /> 
            ${err.response.data.error}<br />
            <br />
            Детальную информацию об ошибке можно посмотреть в консоли браузера (F12 в Chrome).
          `);
        else
          this.$noty.error(`Ошибка - ${err}`);
      });
    this.newRopeLoading = false;
    this.newRope = new Rope();
    this.close();
  }

  public checkAllowedAction(allowedActions: string[], action: string): boolean {
    return allowedActions.includes(action);
  }
}
