import { INote, INoteState, ITodoList, IUser } from '../types';
export declare class TodoList implements ITodoList {
    user: IUser;
    readonly id: string;
    notes: Map<string, INote>;
    constructor(user: IUser);
    addNote(note: INote): void;
    removeNoteById(id: string): void;
    editNoteById(id: string, body: Partial<INoteState>): void;
    getNoteById(id: string): INote | undefined;
    getAllNotes(): INote[];
    getNotesByTitle(title: string): INote[];
    getCompletedNotesLength(): number;
    getUncompletedNotesLength(): number;
    sortNotesByCreatedAt(): void;
    sortNoteByCompleted(): void;
}
