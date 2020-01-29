import { Artist } from './../entity/artist.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Artist)
export class ArtistRepository extends Repository<Artist> { }
