import { INoteConfirm, INoteState } from '../types';
import { Note } from './Note';

export class NoteConfirm extends Note implements INoteConfirm {
  private _areChangesApproved: boolean = false;

  set areChangesApproved(approvmentResult: boolean) {
    this._areChangesApproved = approvmentResult;
  }

  get areChangesApproved(): boolean {
    this.areChangesApproved = confirm('Are you sure you want to change the content of the note?');
    return this._areChangesApproved;
  }

  constructor(state: INoteState) {
    super(state);
  }

  override updateState(updatedProps: Partial<INoteState>): void {
    if (this.areChangesApproved) {
      super.updateState(updatedProps);
    }
  }
}
