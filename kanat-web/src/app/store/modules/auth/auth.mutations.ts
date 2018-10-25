import Vue from "vue";
import { MutationTree } from "vuex";
import * as mutationTypes from "./auth.mutations.types";
import { AuthState } from "@/app/store/modules/auth/auth.state";

const log = Vue.$createLogger("auth-mutations");

export const mutations: MutationTree<AuthState> = {
  [mutationTypes.SET_AUTH](state: AuthState, payload: any): void {
    state.user.username = payload.userData.username;
    state.user.password = payload.userData.password;
    state.user.permissions = payload.permission;
  }
};
