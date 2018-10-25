import { RopeState } from "@/app/store/modules/rope/rope.state";
import { Rope } from "@/app/models/Rope";
import { Firms } from "@/app/constants/ropeTable";

export const getterTypes = {
  IS_LOADING: "IS_LOADING",
  GET_ROPE: "GET_ROPE",
  GET_ORGANIZATION: "GET_ORGANIZATION",
  GET_ORGANIZATION_RU: "GET_ORGANIZATION_RU",
  GET_TOKEN: "GET_TOKEN",
  GET_ALLOWED_ACTIONS: "GET_ALLOWED_ACTIONS"
};

export const getters = {
  [getterTypes.GET_ROPE](state: RopeState): Rope[] {
    return state.ropes;
  },
  [getterTypes.IS_LOADING](state: RopeState): boolean {
    return state.isLoading;
  },
  [getterTypes.GET_ORGANIZATION](state: RopeState): string {
    return state.organization;
  },
  [getterTypes.GET_ORGANIZATION_RU](state: RopeState): string {
    return Firms[state.organization] || state.organization;
  },
  [getterTypes.GET_TOKEN](state: RopeState): string {
    return state.token;
  },
  [getterTypes.GET_ALLOWED_ACTIONS](state: RopeState): any {
    return state.allowedActions;
  }
};
