import { Router } from 'express';
import { mediaRouter } from './media.routes';
import { accountRouter } from './account.routes';
import { eventRouter } from './event.routes';

const router = Router();

router.use('/account', accountRouter);
router.use('/event', eventRouter);

router.use('/media', mediaRouter);

export { router };
