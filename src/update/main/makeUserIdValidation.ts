import { ValidationIdShape } from '@shared/providers/ValidationIdShape/ValidationIdShape';
import { UserIdValidation } from '@update/services/UserIdValidation/UserIdValidation';

export const makeUserIdValidation = (): UserIdValidation => {
  const validationIdShape = new ValidationIdShape();
  return new UserIdValidation(validationIdShape);
};
