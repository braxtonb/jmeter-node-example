import express from 'express';
import PlayerRouter from './routes/Player/player.router';

const router = (app: express.Application) => {
  app.use('/api/player', PlayerRouter);
  app.get('/', (req: express.Request, res: express.Response) => {
    return res.status(200).send({ message: 'Node Sample API 🚀' });
  });
};

export default router;
