import { Application } from 'express';
import { EventService } from '../services/event.service';
import { commonController } from '../core/common.controller';
export const EventController = (app: Application) => {
    const eventService = new EventService();
    const router = commonController(eventService);

    app.use('/events', router);
};
