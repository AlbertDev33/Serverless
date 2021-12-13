import {
  ICreateResponse,
  IParametersShape,
  IResponseShape,
} from '@shared/interfaces/ICreateResponse';

export class CreateResponse implements ICreateResponse {
  public createResponse({
    statusCode,
    body,
    error,
  }: IParametersShape): IResponseShape {
    return {
      statusCode,
      body: JSON.stringify(body),
      error,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': ['Limit', 'limit', 'Page', 'page'].join(
          ',',
        ),
      },
    };
  }
}
