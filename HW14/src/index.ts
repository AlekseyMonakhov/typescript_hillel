import { Note, NoteConfirm, TodoList, User } from './classes';
import { NoteState } from './classes/NoteState';

const user = new User('John Doe');
const note = new Note(new NoteState('Title', 'Content'));
const noteConfirm = new NoteConfirm(new NoteState('Title', 'Content'));
const list = new TodoList(user);

list.addNote(noteConfirm);
list.addNote(note);
list.getNoteById(noteConfirm.id)?.updateState({ title: 'New title' });
