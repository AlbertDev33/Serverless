import { AppError } from '@shared/error/AppError';
import { IUserShape } from '@shared/interfaces/IUserShape';

import { ValidationRequestBody } from './ValidationRequestBody';

type ISutTypes = {
  sut: ValidationRequestBody;
};

const makeSut = (): ISutTypes => {
  const sut = new ValidationRequestBody();

  return {
    sut,
  };
};

describe('Create User', () => {
  it('should throw with invalid user values', async () => {
    const { sut } = makeSut();

    const fakeInvalidUser = {
      age: '25',
      position: 'Developer',
    } as IUserShape;
    const error = [{ required: ['name'] }];

    expect(() => sut.execute(fakeInvalidUser)).toThrow(
      new AppError(JSON.stringify(error)),
    );
  });

  it('should be able to validate request body', async () => {
    const { sut } = makeSut();
    const fakeValidUser: IUserShape = {
      name: 'Jhon Doe',
      age: '25',
      position: 'Developer',
    };

    const user = sut.execute(fakeValidUser);

    expect(user).toEqual(fakeValidUser);
  });
});
