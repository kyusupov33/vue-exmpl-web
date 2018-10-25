import Vue from "vue";
import { MutationTree } from "vuex";
import * as mutationTypes from "./rope.mutations.types";
import { RopeState } from "@/app/store/modules/rope/rope.state";

const log = Vue.$createLogger("rope-mutations");

export const mutations: MutationTree<RopeState> = {
  [mutationTypes.INIT_DATA](state: RopeState, payload: any): void {
    state.ropes = payload.ropes;
    log.info(`Loaded ${state.ropes.length} ropes`);
  },
  [mutationTypes.SET_INITIALIZED](state: RopeState, isLoading: boolean): void {
    state.isLoading = isLoading;
  },
  [mutationTypes.SET_ALLOWED_ACTION](state: RopeState, payload: any): void {
    state.allowedActions = payload;
  },
  [mutationTypes.SET_ORGANIZATION](state: RopeState, payload: any): void {
    state.organization = payload.organization;
  },
  [mutationTypes.SET_ORGANIZATIONS](state: RopeState, payload: any): void {
    state.organizations = payload.organizations;
  },
  [mutationTypes.SET_TOKEN](state: RopeState, { token }): void {
    state.token = token;
  }
};
