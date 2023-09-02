import { LevelInterface } from './Level';

export interface AreaInterface {
  level: LevelInterface[];
  name: string;

  addLevel(level: LevelInterface): void;
  removeLevel(level: LevelInterface): void;
}
