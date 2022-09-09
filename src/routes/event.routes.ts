import { Router } from 'express';
import { CreateEventController } from '../modules/events/useCases/createEvent/createEventController';
import { ListEventController } from '../modules/events/useCases/listAllEvent/listEventController';
// import { UpdateAccountController } from '../modules/account/useCases/updateAccount/updateAccountController';
import { DeleteEventController } from '../modules/events/useCases/deleteEvent/deleteEventController';

const eventRouter = Router();

eventRouter.post('/', new CreateEventController().handle);
eventRouter.get('/', new ListEventController().handle);
// accountRouter.put('/:acc_id', new UpdateAccountController().handle);
eventRouter.delete('/:eve_id', new DeleteEventController().handle);

export { eventRouter };
