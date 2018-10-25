import {Component, Vue} from "vue-property-decorator";
import {
    operationCellsField,
    operationTable,
    OperationTableHeadersImpl
} from "@/app/constants/operationTable";
import {Action, Getter} from "vuex-class";
import {Operation} from "@/app/models/Operation";
import {
    OperationActions,
    OperationGetters
} from "@/app/store/modules/operation";
import {Cable} from "@/app/models/Cable";
import {apiService} from "@/app/services/api";
import {RopeGetters} from "@/app/store/modules/rope";
import {newOperationFields} from "@/app/constants/newOperation";
import { FreezeActions } from "@/app/store/modules/freeze";

@Component({})
export default class OperationComponent extends Vue {
    @Getter(OperationGetters.GetCable) public cable: Cable;
    @Getter(OperationGetters.GetOperation) public operations: Operation[];
    @Getter(RopeGetters.GetToken) private token: string;
    @Getter(OperationGetters.IsLoading) private loading: boolean;
    @Action(OperationActions.AddSerial) private addSerial: any;
    @Action(OperationActions.Init) private initOperations: any;
    @Action(FreezeActions.UpdateFreezeState) private freeze: any;
    private log = Vue.$createLogger("Operation");
    private headers: OperationTableHeadersImpl = operationTable;
    private operationFields: any = operationCellsField;
    private search: string = "";
    private dialog: boolean = false;
    private dialogFields: any = newOperationFields;
    private newOperation: any = new Operation();
    private menu2: boolean = false;
    private date: string = "";
    private opTypes: string[] = [];
    private enterInWorkLoading: boolean = false;
    private pagination: any = {
        rowsPerPage: 10,
        totalItems: 1
    };
    private selected: any[] = [];

    constructor() {
        super();
        this.initOperation().catch(err => {
            this.$noty.error(`Не удалось загрузить информацию о канате - ${err}`);
        });
    }

    public close() {
        this.dialog = false;
    }

    public async initOperation(): Promise<void> {
        await this.addSerial({serial: this.$route.params.id});
        await this.initOperations({operations: this.cable.cableOperations});
        this.opTypes = await apiService.getValidCableOperationTypes();
    }

    public get pages() {
        if (this.operations.length) {
            return this.pagination.rowsPerPage
                ? Math.ceil(this.operations.length / this.pagination.rowsPerPage)
                : 0;
        }
    }

    public checkAllowedAction(allowedActions: string[], action: string): boolean {
        return allowedActions.includes(action);
    }

    public async cableEnterInWork() {
        await this.freeze(true);
        return await apiService
            .setCableEnterInWork({
                auth: {token: this.token},
                form: {
                    cableSerial: this.cable.cableInfo.serial,
                    oilCompanyName: "oil",
                    serviceCompanyName: "service"
                }
            })
            .then(async (res: any) => {
                await this.freeze(false);
                this.$router.replace("/ropes");
                this.$noty.success(
                    `<div style="margin: 20px">
                          Кабель успешно передан в работу!<br />
                         <br />
                         <strong>Время:</strong> ${res.time}<br />
                         <strong>ID транзакции:</strong>  ${res.txid}<br />
                         <strong>Подписи:</strong><br />
                         &nbsp;&nbsp;&nbsp;${res.signs.join("<br/>&nbsp;&nbsp;&nbsp;")}
                     </div>`
                );
            })
            .catch(async (err: any) => {
                await this.freeze(false);
                if (err.response && err.response.data)
                    this.$noty.error(`
                      Ошибка при переводе каната в работу:<br /> 
                      ${err.response.data.error}<br />
                      <br />
                      Детальную информацию об ошибке можно посмотреть в консоли браузера (F12 в Chrome).
                    `);
                else
                    this.$noty.error(`Ошибка - ${err}`);
            });
    }

    public async cableOperationCreate() {
        await this.freeze(true);
        return await apiService
            .cableOperationCreate({
                auth: {token: this.token},
                form: {
                    cableSerial: this.cable.cableInfo.serial,
                    cableOperationInfo: this.newOperation
                }
            })
            .then(async (res: any) => {
                await this.freeze(false);
                this.$router.replace("/ropes");
                this.$noty.success(
                    `<div style="margin: 20px">
                         Операция успешно добавлена!<br />
                         <br />
                         <strong>Время:</strong> ${res.time}<br />
                         <strong>ID транзакции:</strong>  ${res.txid}<br />
                         <strong>Подписи:</strong><br />
                         &nbsp;&nbsp;&nbsp;${res.signs.join("<br/>&nbsp;&nbsp;&nbsp;")}
                     </div>`
                );
            })
            .catch(async (err: any) => {
                await this.freeze(false);
                if (err.response && err.response.data)
                    this.$noty.error(`
                        Ошибка при создании операции с канатом:<br /> 
                        ${err.response.data.error}<br />
                        <br />
                        Детальную информацию об ошибке можно посмотреть в консоли браузера (F12 в Chrome).
                    `);
                else
                    this.$noty.error(`Ошибка - ${err}`);
            });
    }

    public async cableOperationConfirm() {
        await this.freeze(true);
        return await apiService
            .cableOperationConfirm({
                auth: {token: this.token},
                form: {
                    cableSerial: this.cable.cableInfo.serial
                }
            })
            .then(async (res: any) => {
                await this.freeze(false);
                this.$router.replace("/ropes");
                this.$noty.success(
                    `<div style="margin: 20px">
                         Операция успешно подтверждена!<br />
                         <br />
                         <strong>Время:</strong> ${res.time}<br />
                         <strong>ID транзакции:</strong>  ${res.txid}<br />
                         <strong>Подписи:</strong><br />
                         &nbsp;&nbsp;&nbsp;${res.signs.join("<br/>&nbsp;&nbsp;&nbsp;")}
                    </div>`
                );
            })
            .catch(async (err: any) => {
                await this.freeze(false);
                if (err.response && err.response.data)
                    this.$noty.error(`
                      Ошибка при подтверждении операции с канатом:<br /> 
                      ${err.response.data.error}<br />
                      <br />
                      Детальную информацию об ошибке можно посмотреть в консоли браузера (F12 в Chrome).
                    `);
                else
                    this.$noty.error(`Ошибка - ${err}`);
            });
    }
}
