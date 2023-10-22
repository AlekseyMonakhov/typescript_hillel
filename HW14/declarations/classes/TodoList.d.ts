import { INote, INoteState, ITodoList, ITodoListSerchable, ITodoListSortabe, IUser } from '../types';
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
    getCompletedNotesLength(): number;
    getUncompletedNotesLength(): number;
}
export declare class TodoListSearchable extends TodoList implements ITodoListSerchable {
    constructor(user: IUser);
    getNotesByTitle(title: string): INote[];
    getNotesByContent(content: string): INote[];
}
export declare class TodoListSortable extends TodoList implements ITodoListSortabe {
    constructor(user: IUser);
    sortNotesByCreatedAt(): void;
    sortNoteByCompleted(): void;
}
