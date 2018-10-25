import { FreezeState } from "@/app/store/modules/freeze/freeze.state";
import { MutationTree } from "vuex";
import * as mutationTypes from "./freeze.mutations.types";


export const mutations: MutationTree<FreezeState> = {
    [mutationTypes.SET_FREEZE](state: FreezeState, payload: boolean): void {
        state.value = payload;
    }
};