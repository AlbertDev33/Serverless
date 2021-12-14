import { User } from '@shared/entity/User';
import { IShapeId } from '@shared/interfaces/IShapeId';
import { IUserShape } from '@shared/interfaces/IUserShape';

export interface IUserUpdate extends IUserShape {
  userId: string;
}

export interface IParsedUserId extends Omit<IUserUpdate, 'userId'> {
  _id: IShapeId;
}

export interface IRemoveInvalidValues {
  execute(user: IUserUpdate): IParsedUserId;
}
