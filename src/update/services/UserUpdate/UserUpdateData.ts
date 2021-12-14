import { IValidationIdShape } from '@shared/providers/ValidationIdShape/interface/IValidationIdShape';
import { IUpdateUserRepository } from '@update/infra/repository/interface/IUpdateUserRepository';

import {
  IUserUpdate,
  IParsedUserId,
} from '../RemoveInvalidValues/interface/IRemoveInvalidValues';
import { IUserUpdateData } from './interface/IUserUpdateData';

export class UserUpdateData implements IUserUpdateData {
  constructor(
    private updateUserRepository: IUpdateUserRepository,
    private createId: IValidationIdShape,
  ) {}

  public async execute(user: IUserUpdate): Promise<IParsedUserId> {
    const id = this.createId.create(user.userId);
    delete user.userId;
    const makeUser: IParsedUserId = {
      _id: id,
      ...user,
    };
    const updatedUser = await this.updateUserRepository.update(makeUser);
    return updatedUser;
  }
}
