import { User as CreateUser } from '@create/entity/User';

export interface IParametersShape {
  statusCode?: number;
  body?: CreateUser | string;
  error?: Error | string;
}

export interface IResponseShape {
  statusCode: number;
  body: string;
  headers: {
    [key: string]: string;
  };
  error?: Error | string;
}

export interface ICreateResponse {
  createResponse({ statusCode, body, error }: IParametersShape): IResponseShape;
}
