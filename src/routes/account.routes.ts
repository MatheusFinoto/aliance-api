import { Router } from 'express';
import { CreateAccountController } from '../modules/account/useCases/createAccount/createAccountController';
import { ListAccountController } from '../modules/account/useCases/listAllAccount/listAccountController';
import { UpdateAccountController } from '../modules/account/useCases/updateAccount/updateAccountController';
import { DeleteAccountController } from '../modules/account/useCases/deleteAccount/deleteAccountController';

const accountRouter = Router();

accountRouter.post('/', new CreateAccountController().handle);
accountRouter.get('/', new ListAccountController().handle);
accountRouter.put('/:acc_id', new UpdateAccountController().handle);
accountRouter.delete('/:acc_id', new DeleteAccountController().handle);

export { accountRouter };
