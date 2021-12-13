import { CreateResponse } from '@shared/providers/CreateResponse/CreateResponse';
import { Response } from '@shared/providers/Response/Response';

export const makeResponse = (): Response => {
  const createResponse = new CreateResponse();

  return new Response(createResponse);
};
