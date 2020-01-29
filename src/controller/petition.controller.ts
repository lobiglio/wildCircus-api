import { PetitionService } from './../services/petition.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

export const PetitionController = (app: Application) => {
    const petitionService = new PetitionService();
    const router = commonController(petitionService);

    app.use('/petitions', router);
};
