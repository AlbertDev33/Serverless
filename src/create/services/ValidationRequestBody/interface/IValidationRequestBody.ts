import { IUserShape } from '@shared/interfaces/IUserShape';

export interface IValidationRequestBody {
  execute(user: IUserShape): IUserShape;
}
