import { Router } from 'express';
import { mediaRouter } from './media.routes';
import { accountRouter } from './account.routes';

const router = Router();

router.use('/account', accountRouter);

router.use('/media', mediaRouter);

export { router };
