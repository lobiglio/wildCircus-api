import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class Book {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    firstName!: string;

    @Column({ type: 'varchar', length: 25, nullable: false })
    lastName!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    comment!: string;

}
