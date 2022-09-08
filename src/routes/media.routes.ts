import { Router } from 'express';
import { CreateMediaController } from '../modules/media/useCases/createMedia/createMediaController';

const mediaRouter = Router();

mediaRouter.post('/', new CreateMediaController().handle);

export { mediaRouter };
