import { Router } from 'express';
import { CreateEventController } from '../modules/events/useCases/createEvent/createEventController';
import { ListEventController } from '../modules/events/useCases/listAllEvent/listEventController';
import { UpdateEventController } from '../modules/events/useCases/updateEvent/updateEventController';
import { DeleteEventController } from '../modules/events/useCases/deleteEvent/deleteEventController';

const eventRouter = Router();

eventRouter.post('/', new CreateEventController().handle);
eventRouter.get('/', new ListEventController().handle);
eventRouter.put('/:eve_id', new UpdateEventController().handle);
eventRouter.delete('/:eve_id', new DeleteEventController().handle);

export { eventRouter };
