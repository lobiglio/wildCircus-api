import express, { Router, Request, Response, Application } from 'express';
import { UserService } from '../services/user.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {

    const userRouter: Router = express.Router();
    const userService = new UserService();

    userRouter.get('/', (req: Request, res: Response) => {
        res.send(userService.getAll());
    });

    app.use('/user', userRouter);
};
