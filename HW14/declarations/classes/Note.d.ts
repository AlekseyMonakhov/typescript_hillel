import { INote, INoteState } from '../types';
export declare class Note implements INote {
    readonly id: string;
    readonly createdAt: Date;
    updatedAt: Date;
    state: INoteState;
    constructor(title: string, content: string);
    private updateUpdatedAt;
    updateState(updatedProps: Partial<INoteState>): void;
}
