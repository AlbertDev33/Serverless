import { DatabaseConnection } from '@shared/infra/database/DatabaseConnection';
import { ValidationIdShape } from '@shared/providers/ValidationIdShape/ValidationIdShape';
import { UpdateUserRepository } from '@update/infra/repository/UpdateUserRepository';
import { UserUpdateData } from '@update/services/UserUpdate/UserUpdateData';

export const makeUserUpdateData = (): UserUpdateData => {
  const databaseConnection = new DatabaseConnection();
  const userUpdateRepository = new UpdateUserRepository(databaseConnection);
  const validationIdShape = new ValidationIdShape();

  return new UserUpdateData(userUpdateRepository, validationIdShape);
};
