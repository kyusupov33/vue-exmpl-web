import { actions, actionTypes } from "./auth.actions";
import { getters, getterTypes } from "./auth.getters";
import { mutations } from "./auth.mutations";
import { initialState } from "./auth.state";

export const AuthNamespace = "auth";

export const AuthActions = {
  CheckAuth: `${AuthNamespace}/${actionTypes.CHECK_AUTH}`
};

export const AuthGetters = {
  GetAuth: `${AuthNamespace}/${getterTypes.GET_AUTH}`
};

export const auth = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
