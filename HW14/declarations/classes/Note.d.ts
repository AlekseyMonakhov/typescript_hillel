import { INote, INoteConfirm, INoteEditable, INoteState } from '../types';
declare abstract class BaseNote implements INote {
    readonly id: string;
    readonly createdAt: Date;
    updatedAt: Date;
    state: INoteState;
    constructor(state: INoteState);
    protected updateUpdatedAt(): void;
}
export declare class Note extends BaseNote implements INoteEditable {
    constructor(state: INoteState);
    updateState(updatedProps: Partial<INoteState>): void;
    changeCompleted(): void;
}
export declare class NoteConfirm extends BaseNote implements INoteConfirm {
    constructor(state: INoteState);
    changeCompleted(isConfirmed: boolean): void;
    updateState(updatedProps: Partial<INoteState>, isConfirmed: boolean): void;
}
export {};
