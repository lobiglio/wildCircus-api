import { ArtistService } from './../services/artist.service';
import { Application, Router, Request, Response } from 'express';
import { commonController } from '../core/common.controller';

export const ArtistController = (app: Application) => {
    const artistService = new ArtistService();
    let router = Router();

    router.get('/bests', async (req: Request, res: Response) => {
        res.send(await artistService.getByNbVote());
    });

    router = commonController(artistService, router);

    app.use('/artists', router);
};
