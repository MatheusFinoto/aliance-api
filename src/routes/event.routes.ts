import { Router } from 'express';
import { CreateEventController } from '../modules/events/useCases/createEvent/createEventController';
import { ListEventController } from '../modules/events/useCases/listAllEvent/listEventController';
// import { UpdateAccountController } from '../modules/account/useCases/updateAccount/updateAccountController';
// import { DeleteAccountController } from '../modules/account/useCases/deleteAccount/deleteAccountController';

const eventRouter = Router();

eventRouter.post('/', new CreateEventController().handle);
eventRouter.get('/', new ListEventController().handle);
// accountRouter.put('/:acc_id', new UpdateAccountController().handle);
// accountRouter.delete('/:acc_id', new DeleteAccountController().handle);

export { eventRouter };
