import { Router } from 'express';
import { accoutRouter } from './accout.routes';

const router = Router();

router.use('/account', accoutRouter);

export { router };
