import { BookService } from './../services/book.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

export const BookController = (app: Application) => {
    const bookService = new BookService();
    const router = commonController(bookService);

    app.use('/books', router);
};