import { INote, INoteState } from '../types';
export declare class Note implements INote {
    readonly id: string;
    readonly createdAt: Date;
    updatedAt: Date;
    state: INoteState;
    constructor(state: INoteState);
    private updateUpdatedAt;
    updateState(updatedProps: Partial<INoteState>): void;
    changeCompleted(): void;
}
