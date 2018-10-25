import { FreezeState } from "@/app/store/modules/freeze/freeze.state";

export const getterTypes = {
  GET_FREEZE_STATE: "GET_FREEZE_STATE"
};

export const getters = {
  [getterTypes.GET_FREEZE_STATE](state: FreezeState): boolean {
    return state.value;
  }
};
