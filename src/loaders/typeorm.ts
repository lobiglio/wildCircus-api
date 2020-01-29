import { createConnection } from 'typeorm';
import { Artist } from '../entity/artist.entity';
import { Event } from '../entity/event.entity';
import { Reservation } from '../entity/reservation.entity';
import { Booking } from '../entity/booking.entity';
import { Petition } from '../entity/petition.entity';

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
            Event,
            Reservation,
            Booking,
            Petition,
        ],
        synchronize: true,
    });
};
