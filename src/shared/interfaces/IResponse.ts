import { IParametersShape, IResponseShape } from './ICreateResponse';

export interface IResponse {
  successResponse({ body }: IParametersShape): IResponseShape;
  badRequestResponse({ error }: IParametersShape): IResponseShape;
}
