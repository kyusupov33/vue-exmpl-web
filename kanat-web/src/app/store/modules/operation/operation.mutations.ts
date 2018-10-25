import Vue from "vue";
import { MutationTree } from "vuex";
import * as mutationTypes from "./operation.mutations.types";
import { OperationState } from "@/app/store/modules/operation/operation.state";

const log = Vue.$createLogger("operation-mutations");

export const mutations: MutationTree<OperationState> = {
  [mutationTypes.INIT_DATA](state: OperationState, payload: any): void {
    state.operations = payload.operations;
    // log.info(`Loaded ${state.operations.length} operations`, payload);
  },

  [mutationTypes.SET_INITIALIZED](
    state: OperationState,
    isLoading: boolean
  ): void {
    state.isLoading = isLoading;
  },
  [mutationTypes.ADD_SERIAL](state: OperationState, payload: any): void {
    state.cableSerial = payload;
  },
  [mutationTypes.ADD_CABLE](state: OperationState, payload: any): void {
    state.cable = payload;
  },
  [mutationTypes.ADD_OPERATION](state: OperationState, payload: any): void {
    state.operations.push(payload.newOperation);
  }
};
