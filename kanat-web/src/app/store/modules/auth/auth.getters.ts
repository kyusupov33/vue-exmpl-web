import { Authorization } from "@/app/models/Authorization";
import { AuthState } from "@/app/store/modules/auth/auth.state";

export const getterTypes = {
  GET_AUTH: "GET_AUTH"
};

export const getters = {
  [getterTypes.GET_AUTH](state: AuthState): Authorization {
    return state.user;
  }
};
