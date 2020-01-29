import { Petition } from './../entity/petition.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Petition)
export class PetitionRepository extends Repository<Petition> { }
