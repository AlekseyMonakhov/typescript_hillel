import { INoteConfirm, INoteState } from '../types';
import { Note } from './Note';
export declare class NoteConfirm extends Note implements INoteConfirm {
    title: string;
    content: string;
    private _areChangesApproved;
    set areChangesApproved(approvmentResult: boolean);
    get areChangesApproved(): boolean;
    constructor(title: string, content: string);
    updateState(updatedProps: Partial<INoteState>): void;
}
