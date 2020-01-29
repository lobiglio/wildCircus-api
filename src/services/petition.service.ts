import { PetitionRepository } from './../repository/petition.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class PetitionService extends AbstractService {
    protected repository = getCustomRepository(PetitionRepository);
}
