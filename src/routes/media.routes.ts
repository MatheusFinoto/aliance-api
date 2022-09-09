import { Router } from 'express';
import { DeleteMediaController } from '../modules/media/useCases/deleteMedia/deleteMediaController';
import { UpdateMediaController } from '../modules/media/useCases/updateMedia/updateMediaController';
import { ListAllMediaController } from '../modules/media/useCases/listAllMedia/listAllMediaController';
import { CreateMediaController } from '../modules/media/useCases/createMedia/createMediaController';

const mediaRouter = Router();

mediaRouter.post('/', new CreateMediaController().handle);
mediaRouter.get('/', new ListAllMediaController().handle);
mediaRouter.put('/:med_id', new UpdateMediaController().handle);
mediaRouter.delete('/:med_id', new DeleteMediaController().handle);
export { mediaRouter };
