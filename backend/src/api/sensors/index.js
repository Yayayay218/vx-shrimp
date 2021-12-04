import express from 'express';
import { celebrate } from 'celebrate';
import sensorsController from './sensors.controller';
import AuthService from '../../middlewares/auth';
import {
  createValidationSchema,
  updateValidationSchema,
  customPaginateValidateSchema,
} from './sensors.validation';

const router = express.Router();

router.post(
  '/',
  sensorsController.create
);

router.put(
  '/:id',
  sensorsController.update
);

router.get(
  '/',
  sensorsController.findAll
);

router.get('/daily', sensorsController.postDaily)

router.get('/test', sensorsController.test)

router.get('/ac-on', sensorsController.turnOnAc)

router.get('/ac-off', sensorsController.turnOffAc)

router.get('/air-status', sensorsController.getAirStatus)

router.get('/:id', sensorsController.findOne);

router.delete('/:id', AuthService.required, sensorsController.remove);

export default router;
