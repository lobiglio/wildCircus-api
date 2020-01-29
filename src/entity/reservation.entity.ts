import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Event } from './event.entity';

@Entity('reservation')
export class Reservation {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    firstName!: string;

    @Column({ type: 'varchar', length: 25, nullable: false })
    lastName!: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    mail!: string;

    @Column({ type: 'int', nullable: false })
    nbSeat!: number;

    @ManyToOne(
        type => Event,
        event => event.reservations,
    )
    event!: Event;
}
