import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('event')
export class Event {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'date', nullable: false })
    date!: Date;

    @Column({ type: 'int', nullable: false })
    time!: number;

    @Column({ type: 'int', nullable: false })
    maxSeat!: string;

    // @OneToMany(
    //     type => Reservation,
    //     reservation => reservation.event)
    //     reservations!: Reservation[];
}
