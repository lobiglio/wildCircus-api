import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';

@Entity('event')
export class Event {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    date!: string;

    @Column({ type: 'varchar', length: 25, nullable: false })
    time!: string;

    @Column({ type: 'int', nullable: false })
    maxSeat!: number;

    @OneToMany(
        type => Booking,
        booking => booking.event,
    )
    bookings!: Booking[];
}
