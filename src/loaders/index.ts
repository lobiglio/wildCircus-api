import expressLoader from './express';
import { Application } from 'express';
import mysqlLoader from './mysql';

export default async (app: Application ) => {
  console.log('Express start init');
  await expressLoader(app);
  console.log('Mysql Intialized correctly');

  console.log('Mysql Start init');
  await mysqlLoader();
  console.log('Mysql Intialized correctly');
};
