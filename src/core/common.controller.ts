import { AbstractService } from './abstract.service';
import { Router, Request, Response } from 'express';

export const commonController = (service: AbstractService, commonRouter = Router()) => {
    commonRouter.get('/', async (req: Request, res: Response) => {
        res.send(await service.getAll());
    });

    commonRouter.get('/:id', async (req: Request, res: Response) => {
        res.send(await service.getById(Number(req.params.id)));
    });

    commonRouter.post('/', async (req: Request, res: Response) => {
        res.send(await service.add(req.body));
    });

    commonRouter.put('/:id', async (req: Request, res: Response) => {
        const obj = await service.update(Number(req.params.id), req.body);
        res.send(obj);
    });

    commonRouter.delete('/:id', async (req: Request, res: Response) => {
        await service.delete(Number(req.params.id));
        res.sendStatus(204);
    });
    return commonRouter;
};
