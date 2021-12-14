import { User } from '@shared/entity/User';
import { IParsedUserId } from '@update/services/RemoveInvalidValues/interface/IRemoveInvalidValues';

export interface IUpdateUserRepository {
  update(user: IParsedUserId): Promise<User>;
}
