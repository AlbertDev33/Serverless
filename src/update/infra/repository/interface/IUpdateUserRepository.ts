import { User } from '@shared/entity/User';

export interface IUpdateUserRepository {
  update(user: User): Promise<User>;
}
