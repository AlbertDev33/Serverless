import { AppError } from '@shared/error/AppError';
import { IUserShape } from '@shared/interfaces/IUserShape';

import { IValidationRequestBody } from './interface/IValidationRequestBody';

type IBodyError = {
  required: string[];
};

export class ValidationRequestBody implements IValidationRequestBody {
  public execute(user: IUserShape): IUserShape {
    const required = ['name', 'age', 'position'];

    let len = Object.keys(user).length;
    while (len > 0) {
      len -= 1;
      const properties = Object.keys(user);
      const remaining = required.filter(key => !properties.includes(key));
      this.errorVerification(remaining);
    }
    return user;
  }

  private errorVerification(remaining: string[]) {
    const errors = [] as unknown as IBodyError[];
    if (remaining.length > 0) {
      errors.push({
        required: remaining,
      });
      throw new AppError(JSON.stringify(errors));
    }
  }
}
