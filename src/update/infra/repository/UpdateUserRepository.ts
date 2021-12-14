import { Db } from 'mongodb';

import { User } from '@shared/entity/User';
import { IDatabaseConnection } from '@shared/interfaces/IDatabaseConnection';

import { IUpdateUserRepository } from './interface/IUpdateUserRepository';

enum COLLECTION {
  USERS = 'users',
}

export class UpdateUserRepository implements IUpdateUserRepository {
  private database: Promise<Db>;

  constructor(private connect: IDatabaseConnection) {
    this.database = this.connect.connection();
  }

  public async update(user: User): Promise<User> {
    const { value } = await (await this.database)
      .collection<User>(COLLECTION.USERS)
      .findOneAndUpdate(
        {
          _id: user._id,
        },
        {
          $set: user,
        },
        {
          returnDocument: 'after',
        },
      );
    return value;
  }
}
