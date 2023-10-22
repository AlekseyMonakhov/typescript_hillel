import { INote, INoteState } from '../types';
import { NoteState } from './NoteState';
import { v4 as uuidv4 } from 'uuid';

export class Note implements INote {
  readonly id: string = uuidv4();
  readonly createdAt: Date = new Date();
  updatedAt: Date = new Date();
  state: INoteState;

  constructor(title: string, content: string) {
    this.state = new NoteState(title, content);
  }

  private updateUpdatedAt(): void {
    this.updatedAt = new Date();
  }

  updateState(updatedProps: Partial<INoteState>): void {
    this.updateUpdatedAt();
    this.state = Object.assign(this.state, updatedProps);
  }
}
