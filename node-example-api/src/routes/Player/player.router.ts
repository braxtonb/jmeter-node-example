import { Router } from 'express';
import { handleGetPlayerIndex, handleGetPlayerById } from './player.controller';

const PlayerRouter = Router();

// layer path /api/player
PlayerRouter.get('/', handleGetPlayerIndex);
PlayerRouter.get('/:id', handleGetPlayerById);

export default PlayerRouter;
