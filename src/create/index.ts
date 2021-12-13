/* eslint-disable import/no-unresolved */
import { APIGatewayProxyEvent } from 'aws-lambda';

import { IUserShape } from '@shared/interfaces/IUserShape';

import { User } from './entity/User';
import { makeCreateUser } from './main/makeCreateUser';
import { makeValidationRequestBody } from './main/makeValidationRequestBody';

export const createUser = async (
  event: APIGatewayProxyEvent,
): Promise<User> => {
  const body = JSON.parse(event.body) as IUserShape;

  makeValidationRequestBody().execute(body);
  const user = await makeCreateUser().execute(body);
  return user;
};
