import { Router } from 'express';
import { accountRouter } from './account.routes';
import { eventRouter } from './event.routes';

const router = Router();

router.use('/account', accountRouter);
router.use('/event', eventRouter);

export { router };
