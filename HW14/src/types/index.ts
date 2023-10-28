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
}

export interface INoteEditable extends INote {
  updateState(updatedProps: Partial<INoteState>): void;
  changeCompleted(): void;
}

export interface INoteConfirm extends INote {
  updateState(updatedProps: Partial<INoteState>, isConfirmed: boolean): void;
  changeCompleted(isConfirmed: boolean): void;
}

export type INoteUnionType = INoteEditable | INoteConfirm;

export interface IUser {
  readonly id: string;
  name: string;
}

export interface ITodoList {
  readonly id: string;
  user: IUser;

  addNote(note: INote): void;
  removeNoteById(id: string): void;
  editNoteById(id: string, body: Partial<INoteState>): void;
  getNoteById(id: string): INote | undefined;
  getAllNotes(): INote[];
  getCompletedNotesLength(): number;
  getUncompletedNotesLength(): number;
}

export interface ITodoListSortable extends ITodoList {
  sortNotesByCreatedAt(): void;
  sortNoteByCompleted(): void;
}

export interface ITodoListSearchable extends ITodoList {
  getNotesByTitle(title: string): INote[];
  getNotesByContent(content: string): INote[];
}
