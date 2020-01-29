import { ArtistRepository } from './../repository/artist.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class ArtistService extends AbstractService {
    protected repository = getCustomRepository(ArtistRepository);
}
