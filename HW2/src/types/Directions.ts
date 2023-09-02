import { LEVELS } from '../constants';

export interface DirectionInterface {
  levels: LEVELS[];
  name: string;

  addLevel(level: LEVELS): void;
}
