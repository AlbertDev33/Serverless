import { CreateUserRepository } from '@create/infra/repository/CreateUserRepository';
import { CreateUser } from '@create/services/Createuser/CreateUser';
import { DatabaseConnection } from '@shared/infra/database/DatabaseConnection';

export const makeCreateUser = (): CreateUser => {
  const databaseConnection = new DatabaseConnection();
  const createUserRepository = new CreateUserRepository(databaseConnection);

  return new CreateUser(createUserRepository);
};
