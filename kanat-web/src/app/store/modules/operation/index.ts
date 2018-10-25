import { actions, actionTypes } from "./operation.actions";
import { getters, getterTypes } from "./operation.getters";
import { mutations } from "./operation.mutations";
import { initialState } from "./operation.state";

export const OperationNamespace = "operation";

export const OperationActions = {
  Init: `${OperationNamespace}/${actionTypes.INIT}`,
  AddOperation: `${OperationNamespace}/${actionTypes.ADD_OPERATION}`,
  AddSerial: `${OperationNamespace}/${actionTypes.ADD_ROPE_SERIAL}`
};

export const OperationGetters = {
  GetOperation: `${OperationNamespace}/${getterTypes.GET_OPERATIONS}`,
  GetCable: `${OperationNamespace}/${getterTypes.GET_CABLE}`,
  IsLoading: `${OperationNamespace}/${getterTypes.IS_LOADING}`
};

export const operation = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
