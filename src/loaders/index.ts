import expressLoader from './express';
import typeOrmLoader from './typeorm'; // import
import { Application } from 'express';
// import mysqlLoader from './mysql';

export default async (app: Application) => {
  console.log('Express start init');
  await expressLoader(app);
  console.log('Mysql Intialized correctly');


  // Mysql Start
  // console.log('Mysql Start init');
  // await mysqlLoader();
  // console.log('Mysql Intialized correctly');

  //Typeorm Start
  console.log('Typeorm Start init');
  await typeOrmLoader();
  console.log('Typeorm Intialized');

};
