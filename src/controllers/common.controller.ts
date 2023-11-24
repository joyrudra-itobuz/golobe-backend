import { RequestHandler } from "express";
import bycrypt from "bcrypt";
import config from "../config/config";
import userModel from "../model/user.model";
import { v4 as uuidv4 } from "uuid";
import StatusCodes from "../enums/statusCodes.enum";
import { tokenGenerator } from "../helper/token.helper";

export default class CommonController {
  addEditUser: RequestHandler = async (req, res, next) => {
    try {
      const { firstName, lastName, email, phoneNumber, id } = req.body;
      let { password } = req.body;

      const userId = id ?? uuidv4();

      console.log(config.SALT_VALUE);

      password = await bycrypt.hash(password, config.SALT_VALUE);

      const response = await userModel.findOneAndUpdate(
        {
          id: userId,
        },
        {
          $set: { firstName, lastName, password, email, phoneNumber },
        },
        {
          upsert: true,
          new: true,
        }
      );

      console.log(response);

      if (!response) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Internal Server Error");
      }

      res.status(StatusCodes.OK).send({
        message: "Successful",
        success: true,
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
        return next(new Error("Email and Password are Mandatory Fields"));
      }

      const user = await userModel.findOne({ email });

      if (!user) {
        res.status(StatusCodes.NOT_FOUND);
        return next(new Error("User Not Found!"));
      }

      const isPasswordValid = await bycrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return next(new Error("Invalid Password"));
      }

      res.send({
        success: true,
        message: "Welcome To GoLobe",
        token: tokenGenerator({ id: user.id }),
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND);
      next(error);
    }
  };
}
