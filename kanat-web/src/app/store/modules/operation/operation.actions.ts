import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { Operation } from "@/app/models/Operation";
import { OperationState } from "./operation.state";
import * as mutationTypes from "./operation.mutations.types";
import { plainToClass } from "class-transformer";
import { apiService } from "@/app/services/api";
import { Cable } from "@/app/models/Cable";
const log = Vue.$createLogger("operation-actions");
// -------------------------------------------------------------------------
// Define Action Types
// -------------------------------------------------------------------------
export const actionTypes = {
  INIT: "INIT",
  ADD_OPERATION: "ADD_OPERATION",
  ADD_ROPE_SERIAL: "ADD_ROPE_SERIAL"
};
// -------------------------------------------------------------------------
// Define Action Object
// -------------------------------------------------------------------------
export const actions: ActionTree<OperationState, OperationState> = {
  async [actionTypes.INIT](
    { commit, state }: ActionContext<OperationState, OperationState>,
    { operations }
  ): Promise<void> {
    await commit(mutationTypes.INIT_DATA, {
      operations: plainToClass(Operation, operations)
    });
    await commit(mutationTypes.SET_INITIALIZED, true);
  },

  async [actionTypes.ADD_ROPE_SERIAL](
    { commit }: ActionContext<OperationState, OperationState>,
    { serial }
  ): Promise<void> {
    const MAGIC_TOKENS: { [key: string]: string } = {
      "Manufacturer": "STATIC_MAGIC_TOKEN_USER_1",
      "Service Company": "STATIC_MAGIC_TOKEN_USER_3",
      "Oil Company": "STATIC_MAGIC_TOKEN_USER_4"
    };
    const organization: string = await apiService.getOrganization();
    const token = MAGIC_TOKENS[organization];
    const getAllRopesRequest = { auth: { token }, serial };
    const result = await apiService.getRopesBySerialId(getAllRopesRequest);
    const cable = result["cables"][0];
    commit(mutationTypes.ADD_SERIAL, serial);
    commit(mutationTypes.ADD_CABLE, plainToClass(Cable, cable));
  },

  async [actionTypes.ADD_OPERATION](
    { commit, dispatch, state }: ActionContext<OperationState, OperationState>,
    newOperation: any
  ): Promise<void> {
    const MAGIC_TOKENS: { [key: string]: string } = {
      "Manufacturer": "STATIC_MAGIC_TOKEN_USER_1",
      "Service Company": "STATIC_MAGIC_TOKEN_USER_3",
      "Oil Company": "STATIC_MAGIC_TOKEN_USER_4"
    };
    const organization: string = await apiService.getOrganization();
    const token = MAGIC_TOKENS[organization];
    const createNewOperationRequest = {
      auth: { token },
      form: {
        cableSerial: state.cableSerial,
        cableOperationInfo: newOperation
      }
    };
    await apiService.createOperation(createNewOperationRequest);
    // commit(mutationTypes.ADD_OPERATION, newOperation);
  }
};
