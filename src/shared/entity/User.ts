import { IShapeId } from '@shared/interfaces/IShapeId';

export type User = {
  _id: IShapeId;
  age: string;
  name: string;
  position: string;
};
