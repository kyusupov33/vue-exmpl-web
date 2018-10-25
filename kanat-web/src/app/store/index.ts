import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import { freeze } from "./modules/freeze";
import { auth } from "./modules/auth";
import { AuthState } from "@/app/store/modules/auth/auth.state";
import { rope } from "./modules/rope";
import { RopeState } from "@/app/store/modules/rope/rope.state";
import { operation } from "./modules/operation";
import { OperationState } from "@/app/store/modules/operation/operation.state";
import { FreezeState } from "@/app/store/modules/freeze/freeze.state";

export interface State {
  freeze: FreezeState;
  auth: AuthState;
  rope: RopeState;
  operation: OperationState;
}

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
  modules: {
    freeze: freeze as any,
    auth: auth as any,
    rope: rope as any,
    operation: operation as any
  },
  strict: false,
  plugins: [createLogger({})]
});
