import { ObjectId } from 'mongodb';

import { User } from '@create/entity/User';
import { ICreateUserRepository } from '@create/infra/repository/interface/ICreateUserRepository';
import { IUserShape } from '@shared/interfaces/IUserShape';

import { CreateUser } from './CreateUser';

type ISutTypes = {
  sut: CreateUser;
  createUserRepositoryStub: ICreateUserRepository;
};

const makeCreateUserRepository = (): ICreateUserRepository => {
  class CreateUserRepositoryStub implements ICreateUserRepository {
    public async create(user: IUserShape): Promise<User> {
      const fakeUser = {
        _id: new ObjectId(),
        ...user,
      };
      return fakeUser;
    }
  }

  return new CreateUserRepositoryStub();
};

const makeSut = (): ISutTypes => {
  const createUserRepositoryStub = makeCreateUserRepository();
  const sut = new CreateUser(createUserRepositoryStub);

  return {
    sut,
    createUserRepositoryStub,
  };
};

describe('Create User', () => {
  it('should be able to register a user with valid values', async () => {
    const { sut, createUserRepositoryStub } = makeSut();

    const fakeUser = {
      name: 'Jhon Doe',
      age: '25',
      position: 'Developer',
    };

    const repositorySpy = jest.spyOn(createUserRepositoryStub, 'create');

    const fakeCreatedUser = await sut.execute(fakeUser);

    expect(repositorySpy).toHaveBeenCalledWith(fakeUser);
    expect(fakeCreatedUser).toHaveProperty('_id');
  });
});
