import { Db, MongoClient } from 'mongodb';

import { IDatabaseConnection } from '@shared/interfaces/IDatabaseConnection';

const { MONGO_CONNECTION, DB_NAME } = process.env;

export class DatabaseConnection implements IDatabaseConnection {
  private mongo: MongoClient;

  public async connection(): Promise<Db> {
    if (!this.mongo || !this.mongo.connect()) {
      this.mongo = await MongoClient.connect(MONGO_CONNECTION, {
        serverSelectionTimeoutMS: 635,
        maxPoolSize: 10,
      });
    }
    return this.mongo.db(DB_NAME);
  }
}
