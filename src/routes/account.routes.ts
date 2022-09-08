import { Router } from 'express';
import { CreateAccountController } from '../modules/account/useCases/createAccount/createAccountController';
import { ListAccountController } from '../modules/account/useCases/listAllAccount/listAccountController';
import { UpdateAccountController } from '../modules/account/useCases/updateAccount/updateAccountController';

const accountRouter = Router();

accountRouter.post('/', new CreateAccountController().handle);
accountRouter.get('/', new ListAccountController().handle);
accountRouter.put('/:acc_id', new UpdateAccountController().handle);

export { accountRouter };
