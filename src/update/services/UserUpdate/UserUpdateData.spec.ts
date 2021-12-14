/* eslint-disable max-classes-per-file */
import { ObjectId } from 'mongodb';

import { User } from '@shared/entity/User';
import { IShapeId } from '@shared/interfaces/IShapeId';
import { IValidationIdShape } from '@shared/providers/ValidationIdShape/interface/IValidationIdShape';
import { ValidationIdShape } from '@shared/providers/ValidationIdShape/ValidationIdShape';
import { IUpdateUserRepository } from '@update/infra/repository/interface/IUpdateUserRepository';

import { IParsedUserId } from '../RemoveInvalidValues/interface/IRemoveInvalidValues';
import { UserUpdateData } from './UserUpdateData';

type IMakeSut = {
  sut: UserUpdateData;
  updateUserRepository: IUpdateUserRepository;
};

const makeValidationIdShape = (): ValidationIdShape => {
  class ValidationIdShapeStub implements IValidationIdShape {
    public create(id?: string): IShapeId {
      const _id = new ObjectId(id);
      return _id;
    }
    public isValidObjectId(userId: string): boolean {
      console.log(userId);
      return true;
    }
  }
  return new ValidationIdShapeStub();
};

const makeUpdateUserRepository = () => {
  class UpdateUserRepositoryStub implements IUpdateUserRepository {
    public async update(user: IParsedUserId): Promise<User> {
      const id = new ObjectId();
      const validUser: IParsedUserId = {
        _id: id,
        ...user,
      };
      return validUser;
    }
  }
  return new UpdateUserRepositoryStub();
};

const makeSut = (): IMakeSut => {
  const updateUserRepository = makeUpdateUserRepository();
  const validationIdShape = makeValidationIdShape();
  const sut = new UserUpdateData(updateUserRepository, validationIdShape);

  return {
    sut,
    updateUserRepository,
  };
};

describe('Update User', () => {
  it('should be abe to update user data', async () => {
    const { sut } = makeSut();

    const validUser = {
      userId: '61b7f5bf7d2a28b0d14809f9',
      name: 'Jhon Doe',
      age: '25',
      position: 'Developer',
    };

    const user = await sut.execute(validUser);

    expect(user).toHaveProperty('_id');
    expect(user._id).toBeTruthy();
    expect(typeof user._id).toEqual('object');
  });
});
