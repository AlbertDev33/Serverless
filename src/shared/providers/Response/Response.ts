import {
  ICreateResponse,
  IParametersShape,
  IResponseShape,
} from '@shared/interfaces/ICreateResponse';
import { IResponse } from '@shared/interfaces/IResponse';

export class Response implements IResponse {
  private succesStatusCode = 201;
  private badRequestCode = 422;

  constructor(private response: ICreateResponse) {}

  successResponse({ body }: IParametersShape): IResponseShape {
    return this.response.createResponse({
      statusCode: this.succesStatusCode,
      body,
    });
  }
  badRequestResponse({ body }: IParametersShape): IResponseShape {
    return this.response.createResponse({
      statusCode: this.badRequestCode,
      body,
    });
  }
}
