import { ObjectId } from 'mongodb';

import { IShapeId } from '@shared/interfaces/IShapeId';

import { IValidationIdShape } from './interface/IValidationIdShape';

export class ValidationIdShape implements IValidationIdShape {
  public create(id?: string): IShapeId {
    const objectId = id ? new ObjectId(id) : new ObjectId();
    return objectId;
  }

  public isValidObjectId(userId: string): boolean {
    return ObjectId.isValid(userId);
  }
}
