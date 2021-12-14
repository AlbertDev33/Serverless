import { AppError } from '@shared/error/AppError';
import { IValidationIdShape } from '@shared/providers/ValidationIdShape/interface/IValidationIdShape';

import { UserIdValidation } from './UserIdValidation';

type IMakeSut = {
  sut: UserIdValidation;
  validationIdShapeStub: IValidationIdShape;
};

const makeValidationIdShape = (): IValidationIdShape => {
  class ValidationIdShapeStub implements IValidationIdShape {
    public isValidObjectId(userId: string): boolean {
      console.log(userId);
      return true;
    }
  }
  return new ValidationIdShapeStub();
};

const makeSut = (): IMakeSut => {
  const validationIdShapeStub = makeValidationIdShape();
  const sut = new UserIdValidation(validationIdShapeStub);

  return {
    sut,
    validationIdShapeStub,
  };
};

describe('UserId Validation', () => {
  it('should throw without userId', () => {
    const { sut } = makeSut();

    expect(() => sut.execute('')).toThrow(new AppError('User id is required'));
  });

  it('should throw with invalid ObjectId shape', () => {
    const { sut, validationIdShapeStub } = makeSut();

    jest
      .spyOn(validationIdShapeStub, 'isValidObjectId')
      .mockReturnValueOnce(false);

    expect(() => sut.execute('123456')).toThrow(new AppError('Invalid id'));
  });
});
