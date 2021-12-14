import { ICreateUserRepository } from '@create/infra/repository/interface/ICreateUserRepository';
import { User } from '@shared/entity/User';
import { IUserShape } from '@shared/interfaces/IUserShape';

import { ICreateUser } from './interface/ICreateUser';

export class CreateUser implements ICreateUser {
  constructor(private createUser: ICreateUserRepository) {}

  public async execute(user: IUserShape): Promise<User> {
    const createdUser = await this.createUser.create(user);
    return createdUser;
  }
}
