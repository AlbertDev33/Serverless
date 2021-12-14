import { RemoveInvalidValues } from './RemoveInvalidValues';

type IMakeSut = {
  sut: RemoveInvalidValues;
};

const makeSut = (): IMakeSut => {
  const sut = new RemoveInvalidValues();

  return {
    sut,
  };
};

describe('Update User', () => {
  it('should remove null values of request body', () => {
    const { sut } = makeSut();

    const userWithNullValues = {
      userId: '61b7e2d4837fa9620c252143',
      name: null,
      age: '25',
      position: 'Development',
    };

    const userWithValidValues = {
      userId: '61b7e2d4837fa9620c252143',
      age: '25',
      position: 'Development',
    };

    const user = sut.execute(userWithNullValues);
    expect(user).toEqual(userWithValidValues);
  });

  it('should remove empty values of request body', () => {
    const { sut } = makeSut();

    const userWithNullValues = {
      userId: '61b7e2d4837fa9620c252143',
      name: 'Jhon Doe',
      age: '',
      position: 'Development',
    };

    const userWithValidValues = {
      userId: '61b7e2d4837fa9620c252143',
      name: 'Jhon Doe',
      position: 'Development',
    };

    const user = sut.execute(userWithNullValues);
    expect(user).toEqual(userWithValidValues);
  });
});
