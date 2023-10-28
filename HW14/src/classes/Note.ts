import {INote, INoteConfirm, INoteEditable, INoteState} from '../types';
import {v4 as uuidv4} from 'uuid';

abstract class BaseNote implements INote {
    readonly id: string = uuidv4();
    readonly createdAt: Date = new Date();
    updatedAt: Date = new Date();
    state: INoteState;

    protected constructor(state: INoteState) {
        this.state = state;
    }

    protected updateUpdatedAt(): void {
        this.updatedAt = new Date();
    }
}

export class NoteEditable extends BaseNote implements INoteEditable {
    constructor(state: INoteState) {
        super(state);
    }

    updateState(updatedProps: Partial<INoteState>): void {
        this.updateUpdatedAt();
        Object.assign(this.state, updatedProps);
    }

    changeCompleted(): void {
        this.updateUpdatedAt();
        this.updateState({completed: !this.state.completed});
    }
}

export class NoteConfirm extends BaseNote implements INoteConfirm {
    constructor(state: INoteState) {
        super(state);
    }

    changeCompleted(isConfirmed: boolean): void {
        if (isConfirmed) {
            this.updateUpdatedAt()
            Object.assign(this.state, {completed: !this.state.completed});
            return;
        }

        throw new Error('Changes are not approved');
    }

    updateState(updatedProps: Partial<INoteState>, isConfirmed: boolean): void {
        if (isConfirmed) {
            this.updateUpdatedAt()
            Object.assign(this.state, updatedProps);
            return;
        }

        throw new Error('Changes are not approved');
    }
}
