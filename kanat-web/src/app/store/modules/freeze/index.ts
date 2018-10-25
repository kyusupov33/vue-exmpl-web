import { actions, actionTypes } from "./freeze.actions";
import { getters, getterTypes } from "./freeze.getters";
import { mutations } from "./freeze.mutations";
import { initialState } from "./freeze.state";

export const FreezeNamespace = "freeze";

export const FreezeActions = {
  UpdateFreezeState: `${FreezeNamespace}/${actionTypes.UPDATE_FREEZE_STATE}`
};

export const FreezeGetters = {
  GetFreeze: `${FreezeNamespace}/${getterTypes.GET_FREEZE_STATE}`
};

export const freeze = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
