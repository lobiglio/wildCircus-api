import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    title!: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    color!: string;

    @Column({type: 'varchar', length: 255, nullable: false})
    icon!: string;
}
