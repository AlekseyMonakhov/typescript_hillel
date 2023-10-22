import { INoteConfirm, INoteState } from '../types';
import { Note } from './Note';
export declare class NoteConfirm extends Note implements INoteConfirm {
    private _areChangesApproved;
    set areChangesApproved(approvmentResult: boolean);
    get areChangesApproved(): boolean;
    constructor(state: INoteState);
    updateState(updatedProps: Partial<INoteState>): void;
}
