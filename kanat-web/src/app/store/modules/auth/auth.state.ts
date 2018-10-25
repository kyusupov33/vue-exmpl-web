import { Authorization } from "@/app/models/Authorization";

export interface AuthState {
  user: Authorization;
  token: string;
}

export const initialState: AuthState = {
  user: {
    username: "",
    password: "",
    permissions: []
  },
  token: ""
};
