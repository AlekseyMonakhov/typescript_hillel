import { NotEmpty } from '../decorators';
import { INoteState } from '../types';

export class NoteState implements INoteState {
  completed: boolean = false;

  @NotEmpty
  title: string;

  @NotEmpty
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
