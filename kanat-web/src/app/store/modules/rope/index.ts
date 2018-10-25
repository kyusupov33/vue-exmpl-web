import { actions, actionTypes } from "./rope.actions";
import { getters, getterTypes } from "./rope.getters";
import { mutations } from "./rope.mutations";
import { initialState } from "./rope.state";

export const RopeNamespace = "rope";

export const RopeActions = {
  GetRopes: `${RopeNamespace}/${actionTypes.GET_ROPES}`,
  AddRope: `${RopeNamespace}/${actionTypes.ADD_ROPE}`,
  GetRope: `${RopeNamespace}/${actionTypes.GET_ROPE}`
};

export const RopeGetters = {
  GetRope: `${RopeNamespace}/${getterTypes.GET_ROPE}`,
  IsLoading: `${RopeNamespace}/${getterTypes.IS_LOADING}`,
  GetOrganization: `${RopeNamespace}/${getterTypes.GET_ORGANIZATION}`,
  GetOrganizationRU: `${RopeNamespace}/${getterTypes.GET_ORGANIZATION_RU}`,
  GetToken: `${RopeNamespace}/${getterTypes.GET_TOKEN}`,
  GetAllowedActions: `${RopeNamespace}/${getterTypes.GET_ALLOWED_ACTIONS}`
};

export const rope = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
