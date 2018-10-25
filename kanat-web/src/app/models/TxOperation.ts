import { Expose, Exclude } from "class-transformer";

@Exclude()
export class TxOperation {
  @Expose() public signs: string[];
  @Expose() public time: string;
  @Expose() public txid: string;
}
