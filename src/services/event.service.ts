import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
import { EventRepository } from '../repository/event.repository';

export class EventService extends AbstractService {
    protected repository = getCustomRepository(EventRepository);
}
