import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { Rope } from "@/app/models/Rope";
import { RopeState } from "./rope.state";
import * as mutationTypes from "./rope.mutations.types";
import { plainToClass } from "class-transformer";

const log = Vue.$createLogger("rope-actions");
import { apiService } from "@/app/services/api";
import { RopeInfo } from "@/app/models/cabelInfo";
import { OperationState } from "@/app/store/modules/operation/operation.state";
// -------------------------------------------------------------------------
// Define Action Types
// -------------------------------------------------------------------------
export const actionTypes = {
  GET_ROPES: "GET_ROPES",
  GET_ROPE: "GET_ROPE",
  UPDATE_ROPES: "UPDATE_ROPES",
  ADD_ROPE: "ADD_ROPE"
};
// -------------------------------------------------------------------------
// Define Action Object
// -------------------------------------------------------------------------
export const actions: ActionTree<RopeState, RopeState> = {
  async [actionTypes.GET_ROPES]({
    commit
  }: ActionContext<RopeState, RopeState>): Promise<void> {
    const MAGIC_TOKENS: { [key: string]: string } = {
      "Manufacturer": "STATIC_MAGIC_TOKEN_USER_1",
      "Service Company": "STATIC_MAGIC_TOKEN_USER_3",
      "Oil Company": "STATIC_MAGIC_TOKEN_USER_4"
    };
    const organization: string = await apiService.getOrganization();
    const token = MAGIC_TOKENS[organization];
    const getAllRopesRequest = { auth: { token } };
    const organizations = await apiService.getAllOrganizations();
    const result = await apiService.getRopes(getAllRopesRequest);
    commit(mutationTypes.INIT_DATA, {
      ropes: plainToClass(Rope, result.cables)
    });
    commit(mutationTypes.SET_ALLOWED_ACTION, result.allowedActions);
    commit(mutationTypes.SET_INITIALIZED, true);
    commit(mutationTypes.SET_ORGANIZATION, { organization });
    commit(mutationTypes.SET_ORGANIZATIONS, { organizations });
    commit(mutationTypes.SET_TOKEN, { token });
  },
  async [actionTypes.GET_ROPE](
    {  }: ActionContext<RopeState, RopeState>,
    cableSerial
  ) {
    const MAGIC_TOKENS: { [key: string]: string } = {
      "Manufacturer": "STATIC_MAGIC_TOKEN_USER_1",
      "Service Company": "STATIC_MAGIC_TOKEN_USER_3",
      "Oil Company": "STATIC_MAGIC_TOKEN_USER_4"
    };
    const organization: string = await apiService.getOrganization();
    const token = MAGIC_TOKENS[organization];
    const getRopeRequest = {
      auth: { token },
      serial: cableSerial
    };
    console.log("rope req" + getRopeRequest);
    await apiService.getRopesBySerialId(getRopeRequest);
  },
  async [actionTypes.UPDATE_ROPES]({
    commit,
    state
  }: ActionContext<RopeState, RopeState>): Promise<void> {
    const getAllRopesData = {
      auth: {
        token: state.token
      }
    };
    const result = await apiService.getRopes(getAllRopesData);
    commit(mutationTypes.INIT_DATA, {
      ropes: plainToClass(Rope, result.cables)
    });
  },
  async [actionTypes.ADD_ROPE](
    { commit, state, dispatch }: ActionContext<RopeState, RopeState>,
    newRope: RopeInfo
  ): Promise<void> {
    const createNewRopeRequest = {
      auth: { token: state.token },
      form: {
        manufacturerName: state.organization,
        cableInfo: newRope
      }
    };
    const result = await apiService.createRope(createNewRopeRequest);
    await dispatch(actionTypes.UPDATE_ROPES);
    return Promise.resolve(result);
  }
};
