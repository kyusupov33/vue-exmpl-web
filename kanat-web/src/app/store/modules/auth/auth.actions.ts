import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { AuthState } from "@/app/store/modules/auth/auth.state";
import * as mutationTypes from "./auth.mutations.types";
const log = Vue.$createLogger("operation-actions");
import authJson from "@/api/auth.json";
// -------------------------------------------------------------------------
// Define Action Types
// -------------------------------------------------------------------------
export const actionTypes = {
  CHECK_AUTH: "CHECK_AUTH"
};
// -------------------------------------------------------------------------
// Define Action Object
// -------------------------------------------------------------------------
export const actions: ActionTree<AuthState, AuthState> = {
  async [actionTypes.CHECK_AUTH](
    { commit }: ActionContext<AuthState, AuthState>,
    userData
  ): Promise<void> {
    commit(mutationTypes.SET_AUTH, {
      userData,
      permission: authJson
    });
  }
};
