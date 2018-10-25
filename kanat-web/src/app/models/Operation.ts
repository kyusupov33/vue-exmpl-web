import { Expose, Transform, Type } from "class-transformer";
import { OperationInfo } from "@/app/models/OperationInfo";
import { TxOperation } from "@/app/models/TxOperation";

export class Operation {
  @Expose() public operationId: string;
  @Type(() => OperationInfo) public operationInfo: OperationInfo;
  @Expose() public status: string;
  @Expose() public tx_operation: TxOperation;
  @Expose() public tx_operation_confirm: TxOperation;
  @Expose() public wearOff: number;
  @Expose() public wearOffBeforeOp: number;
  @Expose() public wearOffAfterOp: number;
  @Expose() public wearOffBeforeBypassBeforeOp: number;
  @Expose() public wearOffBeforeBypassAfterOp: number;

}
