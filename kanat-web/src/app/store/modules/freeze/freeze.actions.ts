import { ActionContext, ActionTree } from "vuex";
import { FreezeState } from "@/app/store/modules/freeze/freeze.state";
import * as mutationTypes from "./freeze.mutations.types";

export const actionTypes = {
    UPDATE_FREEZE_STATE: "UPDATE_FREEZE_STATE"
};

export const actions: ActionTree<FreezeState, FreezeState> = {
    async [actionTypes.UPDATE_FREEZE_STATE]({ commit }: ActionContext<FreezeState, FreezeState>, value): Promise<void> {
        console.log('value', value)
        commit(mutationTypes.SET_FREEZE, value);
    }
};