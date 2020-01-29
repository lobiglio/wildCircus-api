import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('petition')
export class Petition {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    firstName!: string;

    @Column({ type: 'varchar', length: 25, nullable: false })
    lastName!: string;

}
