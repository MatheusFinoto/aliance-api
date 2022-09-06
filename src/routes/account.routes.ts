import { Router } from 'express';
import { CreateAccountController } from '../modules/account/useCases/createAccount/createAccountController';
import { ListAccountController } from '../modules/account/useCases/listAllAccout/listAccountController';

const accountRouter = Router();

accountRouter.post('/', new CreateAccountController().handle);
accountRouter.get('/', new ListAccountController().handle);

export { accountRouter };
