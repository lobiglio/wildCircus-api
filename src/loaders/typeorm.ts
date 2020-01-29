import { createConnection } from 'typeorm';
import { Artist } from '../entity/artist.entity';

export default async () => {

    await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: parseInt('3306', 10),
        username: process.env.USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.WILDCIRCUS_DB,
        entities: [
            Artist,
        ],
        synchronize: true,
    });
};
