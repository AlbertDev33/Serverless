import { IShapeId } from '@shared/interfaces/IShapeId';

export interface IValidationIdShape {
  create(id?: string): IShapeId;
  isValidObjectId(userId: string): boolean;
}
