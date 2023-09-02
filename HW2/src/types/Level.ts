import { GroupInterface } from './Group';

export interface LevelInterface {
  name: string;
  program: string;
  addGroup(group: GroupInterface): void;
  removeGroup(group: GroupInterface): void;
}
