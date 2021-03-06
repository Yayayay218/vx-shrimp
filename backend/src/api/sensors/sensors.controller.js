import { Controller } from '../../helpers/common';
import sensorsService from './sensors.service';
import { handleResponse as Response } from '../../helpers';

class SensorsController extends Controller {
  constructor(service, name) {
    super(service, name);
  }

  async postDaily(req, res, next) {
    try {
      await sensorsService.postDaily(req.query)

      return Response.success(res, 'OK')
    } catch (e) {
      next(e)
    }
  }

  async test(req, res, next) {
    try {
      await sensorsService.testSocket()

      return Response.success(res, 'Done')
    } catch (e) {
      next(e)
    }
  }

  async turnOnAc(req, res, next) {
    try {
      await sensorsService.turnOnAc()

      return Response.success(res, 'Done')
    } catch (e) {
      next(e)
    }
  }

  async turnOffAc(req, res, next) {
    try {
      await sensorsService.turnOffAc()

      return Response.success(res, 'Done')
    } catch (e) {
      next(e)
    }
  }

  async getAirStatus(req, res, next) {
    try {
      await sensorsService.getAcStatus()

      return Response.success(res, 'Done')
    } catch (e) {
      next(e)
    }
  }
}

export default new SensorsController(sensorsService, 'Sensors');
