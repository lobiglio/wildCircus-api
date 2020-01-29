import { ArtistService } from './../services/artist.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

export const ArtistController = (app: Application) => {
    const artistService = new ArtistService();
    const router = commonController(artistService);

    app.use('/artists', router);
};
