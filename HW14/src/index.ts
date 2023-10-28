import {NoteConfirm, NoteEditable, TodoList, User} from './classes';
import {NoteState} from './classes/NoteState';

const user = new User('John Doe');
const noteEdit = new NoteEditable(new NoteState('Title', 'Content'));
const noteConfirm = new NoteConfirm(new NoteState('Title', 'Content'));
const list = new TodoList(user);

list.addNote(noteConfirm);
list.addNote(noteEdit);
list.addNote(noteConfirm);
list.getNoteById(noteConfirm.id).updateState({title: 'New title'}, true);