/* eslint-disable import/no-unresolved */
import { APIGatewayProxyEvent } from 'aws-lambda';

import { User } from '@shared/entity/User';
import { IUserShape } from '@shared/interfaces/IUserShape';

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
