import { BookingService } from './../services/booking.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

export const BookingController = (app: Application) => {
    const bookingServive = new BookingService();
    const router = commonController(bookingServive);

    app.use('/bookings', router);
};
