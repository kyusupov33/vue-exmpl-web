import { Expose, Transform, Type } from "class-transformer";
import { RopeInfo } from "@/app/models/cabelInfo";

export class Rope {
  @Type(() => RopeInfo)
  @Transform(getSerial)
  public cableInfo: string;
  @Expose() public status: string;
  @Expose() public manufacturer: string;
  @Expose() public oilCompany: string;
  @Expose() public serviceCompany: string;
  @Expose() public wearOff: number;
  @Expose() public cableLeft: number;
}

function getSerial(value: RopeInfo) {
  return value.serial;
}
