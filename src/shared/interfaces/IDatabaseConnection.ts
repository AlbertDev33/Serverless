import { Db } from 'mongodb';

export interface IDatabaseConnection {
  connection(): Promise<Db>;
}
