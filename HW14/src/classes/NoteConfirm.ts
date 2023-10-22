import { INoteConfirm, INoteState } from '../types';
import { Note } from './Note';

export class NoteConfirm extends Note implements INoteConfirm {
  private _areChangesApproved: boolean = false;

  set areChangesApproved(approvmentResult: boolean) {
    this._areChangesApproved = approvmentResult;
  }

  get areChangesApproved(): boolean {
    return this._areChangesApproved;
  }

  constructor(
    public title: string,
    public content: string
  ) {
    super(title, content);
  }

  override updateState(updatedProps: Partial<INoteState>): void {
    this.areChangesApproved = confirm('Are you sure you want to change the content of the note?');

    if (this.areChangesApproved) {
      super.updateState(updatedProps);
    }
  }
}
