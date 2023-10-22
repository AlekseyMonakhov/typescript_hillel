import { INoteState } from '../types';
export declare class NoteState implements INoteState {
    completed: boolean;
    title: string;
    content: string;
    constructor(title: string, content: string);
}
