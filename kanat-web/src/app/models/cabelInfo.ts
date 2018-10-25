import { Expose, Exclude } from "class-transformer";

@Exclude()
export class RopeInfo {
    @Expose() public serial: string;
    @Expose() public dia: number;
    @Expose() public length: number;
    @Expose() public description: string;
}
