import { RopeInfo } from "@/app/models/cabelInfo";
import { Operation } from "@/app/models/Operation";
import { TxOperation } from "@/app/models/TxOperation";
import { Expose, Type } from "class-transformer";

export class Cable {
  @Expose() public allowedActions: string[];
  @Type(() => RopeInfo)
  public cableInfo: RopeInfo;
  @Expose() public cableLeft: number;
  @Type(() => Operation)
  public cableOperations: Operation[];
  @Expose() public manufacturer: string;
  @Expose() public oilCompany: string;
  @Expose() public serviceCompany: string;
  @Expose() public status: string;
  @Expose() public wearOff: string;
  public tx_create: TxOperation;
  public tx_enter_in_work: TxOperation;
}
