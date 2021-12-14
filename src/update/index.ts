/* eslint-disable import/no-unresolved */
import { APIGatewayProxyEvent } from 'aws-lambda';

import { User } from '@shared/entity/User';

import { makeRemoveInvalidValues } from './main/makeRemoveInvalidValues';
import { makeUserIdValidation } from './main/makeUserIdValidation';
import { makeUserUpdateData } from './main/makeUserUpdateData';
import { IUserUpdate } from './services/RemoveInvalidValues/interface/IRemoveInvalidValues';

export const updateUser = async (
  event: APIGatewayProxyEvent,
): Promise<User> => {
  const body = JSON.parse(event.body) as IUserUpdate;
  makeRemoveInvalidValues().execute(body);
  makeUserIdValidation().execute(body.userId);
  const user = await makeUserUpdateData().execute(body);
  return user;
};
