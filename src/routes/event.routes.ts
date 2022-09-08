import { Router } from 'express';
import { CreateEventController } from '../modules/events/useCase/createEvent/createEventController';
// import { ListAccountController } from '../modules/account/useCases/listAllAccount/listAccountController';
// import { UpdateAccountController } from '../modules/account/useCases/updateAccount/updateAccountController';
// import { DeleteAccountController } from '../modules/account/useCases/deleteAccount/deleteAccountController';

const eventRouter = Router();

eventRouter.post('/', new CreateEventController().handle);
// accountRouter.get('/', new ListAccountController().handle);
// accountRouter.put('/:acc_id', new UpdateAccountController().handle);
// accountRouter.delete('/:acc_id', new DeleteAccountController().handle);

export { eventRouter };
