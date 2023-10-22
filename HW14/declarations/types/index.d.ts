export interface INote {
    readonly id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    completed: boolean;
}
export interface INoteConfirm extends INote {
    requiresConfirmation: boolean;
}
export interface IUser {
    readonly id: string;
    name: string;
}
export interface ITodoList {
    readonly id: string;
    user: IUser;
    notes: Map<string, INote>;
    addNote(note: INote): void;
    removeNote(id: string): void;
    editNote(id: string, body: Partial<INote>): void;
    getNoteById(id: string): void;
    getAllNotes(): void;
}
