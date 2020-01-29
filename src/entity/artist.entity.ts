import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artist')
export class Artist {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    name!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    description!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    imgUrl!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    videoUrl!: string;

    @Column({ type: 'int', default: 0 })
    nbVote!: number;
}
