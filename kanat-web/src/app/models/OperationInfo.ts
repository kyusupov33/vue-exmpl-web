import { Expose, Exclude } from "class-transformer";

@Exclude()
export class OperationInfo {
  @Expose() public blockWeight: number;
  @Expose() public brigade: string;
  @Expose() public bush: string;
  @Expose() public byPass: number;
  @Expose() public candleLength: number;
  @Expose() public depthEnd: number;
  @Expose() public depthStart: number;
  @Expose() public expedition: string;
  @Expose() public filial: string;
  @Expose() public oilfield: string;
  @Expose() public opDate: string;
  @Expose() public opNum: number;
  @Expose() public opType: string;
  @Expose() public weightHookEnd: number;
  @Expose() public weightHookStart: number;
  @Expose() public well: string;
}
