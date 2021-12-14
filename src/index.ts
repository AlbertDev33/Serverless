/* eslint-disable import/no-unresolved */
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import { IResponseShape } from '@shared/interfaces/ICreateResponse';
import { makeResponse } from '@shared/main/makeResponse';

import { createUser } from './create';
import { updateUser } from './update';

const callFunction = {
  POST: async (event: APIGatewayProxyEvent) => createUser(event),
  PUT: async (event: APIGatewayProxyEvent) => updateUser(event),
};

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<IResponseShape> => {
  context.callbackWaitsForEmptyEventLoop = false;
  let response: IResponseShape;

  try {
    const user = await callFunction[event.requestContext.httpMethod](event);
    response = makeResponse().successResponse({ body: user });
  } catch (err) {
    response = makeResponse().badRequestResponse({ body: err.message });
  }
  return response;
};
