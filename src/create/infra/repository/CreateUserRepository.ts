import { Db } from 'mongodb';

import { User } from '@shared/entity/User';
import { IDatabaseConnection } from '@shared/interfaces/IDatabaseConnection';
import { IUserShape } from '@shared/interfaces/IUserShape';

import { ICreateUserRepository } from './interface/ICreateUserRepository';

enum COLLLECTION {
  USERS = 'users',
}

export class CreateUserRepository implements ICreateUserRepository {
  private database: Promise<Db>;

  constructor(private connect: IDatabaseConnection) {
    this.database = this.connect.connection();
  }

  public async create(user: IUserShape): Promise<User> {
    const { insertedId } = await (await this.database)
      .collection<User>(COLLLECTION.USERS)
      .insertOne(user);

    const createdUser = {
      _id: insertedId,
      ...user,
    };
    return createdUser;
  }
}
