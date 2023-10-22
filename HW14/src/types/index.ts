export interface INoteState {
  title: string;
  content: string;
  completed: boolean;
}

export interface INote {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;

  state: INoteState;

  updateState(updatedProps: Partial<INoteState>): void;
}

export interface INoteConfirm extends INote {
  areChangesApproved: boolean;
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
