import {Operation} from "@/app/models/Operation";
import {Cable} from "@/app/models/Cable";

export interface OperationState {
    operations: Operation[];
    cableSerial: string;
    isLoading: boolean;
    cable: Cable;
}

export const initialState: OperationState = {
    operations: [],
    cableSerial: "",
    cable: new Cable(),
    isLoading: false
};
