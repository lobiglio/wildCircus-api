import { createConnection } from 'typeorm';

export default async () => {

await createConnection({
    type: 'mysql',
    host: process.env.TEMPLATE_DB_HOST,
    port: parseInt(process.env.TEMPLATE_DB_PORT || '3306', 10),
    username: process.env.TEMPLATE_DB_USER,
    password: process.env.TEMPLATE_DB_PASS,
    database: process.env.TEMPLATE_DB,
    entities: [
        // __dirname + '/entity/*.entity.js',
    ],
    synchronize: true,
});
};
