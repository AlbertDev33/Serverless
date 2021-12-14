import {
  IParsedUserId,
  IRemoveInvalidValues,
  IUserUpdate,
} from './interface/IRemoveInvalidValues';

export class RemoveInvalidValues implements IRemoveInvalidValues {
  public execute(user: IUserUpdate): IParsedUserId {
    const validProperty = {} as IParsedUserId;

    for (const key in user) {
      if (user[key] !== null && user[key] !== undefined && user[key] !== '') {
        validProperty[key] = user[key];
      }
    }
    return validProperty;
  }
}
