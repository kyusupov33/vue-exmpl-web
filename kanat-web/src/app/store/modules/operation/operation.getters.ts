import { Operation } from "@/app/models/Operation";
import { OperationState } from "@/app/store/modules/operation/operation.state";
import { Cable } from "@/app/models/Cable";

export const getterTypes = {
  IS_LOADING: "IS_LOADING",
  GET_CABLE: "GET_CABLE",
  GET_OPERATIONS: "GET_OPERATIONS",
  GET_CABLE_SERIAL: "GET_CABLE_SERIAL"
};

export const getters = {
  [getterTypes.GET_OPERATIONS](state: OperationState): Operation[] {
    return state.operations;
  },
  [getterTypes.IS_LOADING](state: OperationState): boolean {
    return state.isLoading;
  },
  [getterTypes.GET_CABLE](state: OperationState): Cable {
    return state.cable;
  },
  [getterTypes.GET_CABLE_SERIAL](state: OperationState): string {
    return state.cableSerial;
  }
};
