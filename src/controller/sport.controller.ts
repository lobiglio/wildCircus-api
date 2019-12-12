import { SportService } from '../services/sport.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const SportController = (app: Application) => {

    const sportsRouter: Router = express.Router();
    const sportService = new SportService();

    sportsRouter.get('/', (req: Request, res: Response) => {
        res.send(sportService.getAll());
    });

    app.use('/sport', sportsRouter);
};
