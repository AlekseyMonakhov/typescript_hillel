import { INote, INoteState, ITodoList, IUser } from '../types';
import { v4 as uuidv4 } from 'uuid';

export class TodoList implements ITodoList {
  readonly id: string = uuidv4();
  notes: Map<string, INote> = new Map();

  constructor(public user: IUser) {}

  addNote(note: INote): void {
    this.notes.set(note.id, note);
  }

  removeNoteById(id: string): void {
    this.notes.delete(id);
  }

  editNoteById(id: string, body: Partial<INoteState>): void {
    const note = this.notes.get(id);

    if (note) {
      note.updateState(body);
    }
  }

  getNoteById(id: string): INote | undefined {
    return this.notes.get(id);
  }

  getAllNotes(): INote[] {
    return Array.from(this.notes.values());
  }

  getNotesByTitle(title: string): INote[] {
    return this.getAllNotes().filter(note => note.state.title === title);
  }

  getCompletedNotesLength(): number {
    return this.getAllNotes().filter(note => note.state.completed).length;
  }

  getUncompletedNotesLength(): number {
    return this.getAllNotes().filter(note => !note.state.completed).length;
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
