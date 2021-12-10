/* eslint-disable import/no-unresolved */
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<string> => {
  return 'Hello World';
};
