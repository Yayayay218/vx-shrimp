import { Router } from 'express';
import auth from './auth';
import users from './users';
import uploads from './uploads';
import configs from './configs';
import sensors from './sensors';

const router = new Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/uploads', uploads);
router.use('/configs', configs);
router.use('/sensors', sensors);

export default router;
