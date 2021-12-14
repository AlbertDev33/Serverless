import {
  IParsedUserId,
  IUserUpdate,
} from '@update/services/RemoveInvalidValues/interface/IRemoveInvalidValues';

export interface IUserUpdateData {
  execute(user: IUserUpdate): Promise<IParsedUserId>;
}
