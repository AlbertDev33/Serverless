import { User } from '@shared/entity/User';
import { IUserShape } from '@shared/interfaces/IUserShape';

export interface ICreateUserRepository {
  create(user: IUserShape): Promise<User>;
}
