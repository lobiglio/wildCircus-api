import { BookingRepository } from './../repository/booking.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class BookingService extends AbstractService {
    protected repository = getCustomRepository(BookingRepository);
}
