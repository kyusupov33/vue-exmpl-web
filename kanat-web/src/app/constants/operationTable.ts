export interface OperationTableHeadersImpl {
  [index: number]: {
    text: string;
    align: string;
    sortable?: boolean;
    value: string;
  };
}

export const operationTable: OperationTableHeadersImpl = [
  {value: "status", text: "Статус", align: "left", sortable: false},
  {value: "opNum", text: "Номер", align: "left"},
  {value: "opDate", text: "Дата", align: "left"},
  {value: "opType", text: "Вид операции", align: "left"},
  {value: "depthStart", text: "Глубина в начале", align: "right"},
  {value: "depthEnd", text: "Глубина в конце", align: "right"},
  {value: "weightHookStart", text: "Вес в начале", align: "right"},
  {value: "weightHookEnd", text: "Вес в конце", align: "right"},
  {value: "wearOff", text: "Наработка за операцию", align: "right"},
  {value: "wearOffAfterOp", text: "Накопленная наработка", align: "right"},
  {value: "wearOffBeforeBypassAfterOp", text: "Наработка до перепуска", align: "right"},
  {value: "txOperationTime", text: "Время создания", align: "left"},
  {value: "txOperationConfirmTime", text: "Время подтверждения", align: "left"}
];

export const operationCellsField: any = {
  status: "Текущее состояние кабеля",
  opNum: "Номер операции",
  opDate: "Дата операции",
  opType: "Вид операции",
  depthStart: "Глубина в начала",
  depthEnd: "Глубина в конце",
  weightHookStart: "Вес в начале",
  weightHookEnd: "Вес в конце",
  wearOff: "Наработка за операцию",
  wearOffAfterOp: "Накопленная наработка",
  wearOffBeforeBypassAfterOp: "Наработка до перепуска",

  tx_operation: {
    time: "Время создания"
  },
  tx_operation_confirm: {
    time: "Время подтверждения"
  }
};
