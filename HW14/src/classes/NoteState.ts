import { INoteState } from '../types';

export class NoteState implements INoteState {
  completed: boolean = false;
  constructor(
    public title: string,
    public content: string
  ) {}
}
