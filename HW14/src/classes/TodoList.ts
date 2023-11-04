import { INote, INoteState, INoteUnionType, ITodoList, ITodoListSearchable, ITodoListSortable, IUser } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { NoteEditable } from './Note';

export class TodoList implements ITodoList {
  readonly id: string = uuidv4();
  notes: Map<string, INoteUnionType> = new Map();

  constructor(public user: IUser) {}

  addNote(note: INoteUnionType): void {
    this.notes.set(note.id, note);
  }

  removeNoteById(id: string): void {
    this.notes.delete(id);
  }

  getNoteById(id: string): INoteUnionType | never {
    const note = this.notes.get(id);

    if (note) {
      return note;
    }

    throw new Error('Note not found');
  }

  editNoteById(id: string, body: Partial<INoteState>): void | never {
    const note = this.getNoteById(id);

    if (note) {
      if (note instanceof NoteEditable) {
        note.updateState(body);
      } else {
        note.updateState(body, true);
      }
      return;
    }

    throw new Error('Note not found');
  }

  getAllNotes(): INote[] {
    return Array.from(this.notes.values());
  }

  getCompletedNotesLength(): number {
    return this.getAllNotes().filter(note => note.state.completed).length;
  }

  getUncompletedNotesLength(): number {
    return this.getAllNotes().filter(note => !note.state.completed).length;
  }
}

export class TodoListSearchable extends TodoList implements ITodoListSearchable {
  constructor(user: IUser) {
    super(user);
  }

  getNotesByTitle(title: string): INote[] {
    return this.getAllNotes().filter(note => note.state.title === title);
  }

  getNotesByContent(content: string): INote[] {
    return this.getAllNotes().filter(note => note.state.content === content);
  }
}

export class TodoListSortable extends TodoList implements ITodoListSortable {
  constructor(user: IUser) {
    super(user);
  }

  sortNotesByCreatedAt(): void {
    this.notes = new Map(
      [...this.notes.entries()].sort((a, b) => {
        return a[1].createdAt.getTime() - b[1].createdAt.getTime();
      })
    );
  }

  sortNoteByCompleted(): void {
    this.notes = new Map(
      [...this.notes.entries()].sort((a, b) => {
        return Number(a[1].state.completed) - Number(b[1].state.completed);
      })
    );
  }
}
