import { RequestHandler } from 'express';
import bycrypt from 'bcrypt';
import config from '../config/config';
import userModel from '../model/user.model';
import { v4 as uuidv4 } from 'uuid';
import StatusCodes from '../enums/statusCodes.enum';
import { tokenGenerator } from '../helper/token.helper';

export default class CommonController {
  addEditUser: RequestHandler = async (req, res, next) => {
    try {
      const { email } = req.body;
      const isExistingUser = await userModel.find({ email });
      const userDetails = req.body.authData.userDetails;

      if (isExistingUser && !userDetails) {
        res.status(StatusCodes.FORBIDDEN);
        next(new Error('User Already Exists!'));
      }

      if (userDetails && email) {
        res.status(StatusCodes.FORBIDDEN);
        next(new Error('Email Address Cannot Be Edited'));
      }

      let { password, id } = req.body;

      if (password) {
        password = await bycrypt.hash(password, config.SALT_VALUE);
      }

      if (userDetails && !password) {
        password = userDetails.password;
      }

      const userId = userDetails.id ?? id ?? uuidv4();

      const response = await userModel.findOneAndUpdate(
        {
          id: userId,
        },
        {
          $set: { ...req.body, password, userId },
        },
        {
          upsert: true,
          new: true,
        }
      );

      if (!response) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error('Internal Server Error');
      }

      res.status(StatusCodes.OK).send({
        message: 'Successful',
        success: true,
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR);
      next(error);
    }
  };

  login: RequestHandler = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(StatusCodes.BAD_REQUEST);
        return next(new Error('Email and Password are Mandatory Fields'));
      }

      const user = await userModel.findOne({ email });

      if (!user) {
        res.status(StatusCodes.NOT_FOUND);
        return next(new Error('User Not Found!'));
      }

      const isPasswordValid = await bycrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return next(new Error('Invalid Password'));
      }

      res.send({
        success: true,
        message: 'Welcome To GoLobe!',
        data: { token: tokenGenerator({ id: user.id }), user },
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND);
      next(error);
    }
  };

  getProfile: RequestHandler = async (req, res, next) => {
    try {
      const userDetails = req.body.authData.userDetails;
      if (!userDetails) {
        res.status(StatusCodes.UNAUTHORIZED);
        next(new Error('Authentication Failed!'));
      }

      res.send({
        data: userDetails,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
