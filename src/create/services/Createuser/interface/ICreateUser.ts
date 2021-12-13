import { User } from '@create/entity/User';
import { IUserShape } from '@shared/interfaces/IUserShape';

export interface ICreateUser {
  execute(user: IUserShape): Promise<User>;
}
