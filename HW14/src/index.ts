import { Note, NoteConfirm, TodoList, User } from './classes';

const user = new User('John Doe');
const note = new Note('Title', 'Content');
const noteConfirm = new NoteConfirm('Title', 'Content');
const list = new TodoList(user);

list.addNote(noteConfirm);
list.addNote(note);
list.getNoteById(noteConfirm.id)?.updateState({ title: 'New title' });
