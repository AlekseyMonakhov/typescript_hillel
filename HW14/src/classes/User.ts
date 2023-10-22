import { IUser } from '../types';
import { v4 as uuidv4 } from 'uuid';

export class User implements IUser {
  readonly id: string = uuidv4();
  constructor(public name: string) {}
}
