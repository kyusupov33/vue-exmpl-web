import { Rope } from "@/app/models/Rope";

export interface RopeState {
  ropes: Rope[];
  organization: string;
  token: string;
  organizations: any[];
  isLoading: boolean;
  allowedActions: string[];
}

export const initialState: RopeState = {
  ropes: [],
  organization: "",
  token: "",
  organizations: [],
  isLoading: false,
  allowedActions: []
};
