import { BookRepository } from './../repository/book.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class BookService extends AbstractService {
    protected repository = getCustomRepository(BookRepository);
}
