import { AppError } from '@shared/error/AppError';
import { IValidationIdShape } from '@shared/providers/ValidationIdShape/interface/IValidationIdShape';

import { IUserIdValidation } from './interface/IUserIdValidation';

enum ERROR {
  REQUIRED_USER_ID = 'User id is required',
  INVALID_ID = 'Invalid id',
}

export class UserIdValidation implements IUserIdValidation {
  constructor(private verify: IValidationIdShape) {}

  public execute(userId: string): void {
    if (!userId) {
      throw new AppError(ERROR.REQUIRED_USER_ID);
    }
    this.isValidId(userId);
  }

  private isValidId(userId: string): void {
    const isValid = this.verify.isValidObjectId(userId);
    if (!isValid) {
      throw new AppError(ERROR.INVALID_ID);
    }
  }
}
