import express from 'express';
import CommonController from '../controllers/common.controller';
import checkRequestPlatform from '../middlewares/auth/check.request.platform';
import validateToken from '../middlewares/auth/validate.token.middleware';

const commonController = new CommonController();

const router = express.Router();

router.post('/sign-up', [checkRequestPlatform], commonController.addEditUser);

router.post(
  '/edit-profile',
  [checkRequestPlatform, validateToken],
  commonController.addEditUser
);

router.post('/login', commonController.login);

router.get('/profile', [validateToken], commonController.getProfile);

export default router;
