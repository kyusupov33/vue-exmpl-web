export interface RopeTableHeadersImpl {
  [index: number]: {
    text: string;
    align: string;
    sortable?: boolean;
    value: string;
  };
}

export const ropeTableHeaders: RopeTableHeadersImpl = [
  {
    text: "Серийный номер каната",
    align: "center",
    sortable: false,
    value: "serial"
  },
  { text: "Текущее состояние кабеля", align: "center", value: "status" },
  { text: "Наработка", align: "center", value: "wearOff" },
  { text: "Остаток в бухте", align: "center", value: "cableLeft" },
  { text: "Производитель", align: "center", value: "manufacturer" },
  { text: "Нефтедобывающая компания", align: "center", value: "oilCompany" },
  { text: "Сервисная компания", align: "center", value: "serviceCompany" }
];

export interface RopeCellsFieldImpl {
  [index: string]: string;
}

export const ropeCellsField: any = {
  cableInfo: {
    serial: "Серийный номер каната"
  },
  status: "Текущее состояние кабеля",
  wearOff: "Наработка",
  cableLeft: "Остаток в бухте",
  manufacturer: "Производитель",
  oilCompany: "Нефтедобывающая компания",
  serviceCompany: "Сервисная компания"
};

export const Firms: any = {
  manufacturer: "Производитель",
  "Oil Company": "Нефтедобывающая компания",
  "Service Company": "Сервисная компания"
};
