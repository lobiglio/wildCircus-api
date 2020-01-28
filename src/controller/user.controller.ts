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

    userRouter.get('/', async (req: Request, res: Response) => {
        res.send(await userService.getAll());
    });

    userRouter.post('/', async (req: Request, res: Response) => {
        const user = req.body;
        res.send(await userService.create(user));
    });

    app.use('/users', userRouter);
};
