import { Expose, Exclude } from "class-transformer";

export interface AuthorizationI {
  ALL?: string;
  Medium?: string;
  User?: string;
}

@Exclude()
export class Authorization {
  @Expose() public username: string;
  @Expose() public password: string;
  @Expose() public permissions?: AuthorizationI[];
}
