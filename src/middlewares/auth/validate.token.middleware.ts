import { Request, Response, NextFunction } from 'express';
import userModel from '../../model/user.model';
import jwt from 'jsonwebtoken';
import { JwtCustomPayload } from '../../interfaces/jwt';
import config from '../../config/config';
import StatusCodes from '../../enums/statusCodes.enum';
import { UserTypes } from '../../enums/types.enum';

export default async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(' ')[1] as string;

    const isTokenValid = jwt.verify(token, config.JWT_SECRET);

    if (!isTokenValid) {
      res.status(StatusCodes.UNAUTHORIZED);
      next(new Error('Invalid Token'));
    }

    const getPayload = jwt.decode(token, { json: true }) as JwtCustomPayload;

    const user = await userModel.findOne({ id: getPayload.id });

    if (!user) {
      res.status(StatusCodes.NOT_FOUND);
      next(new Error('User Not Found'));
    }

    if (
      user?.userType === UserTypes.USER &&
      req.body.authData.reqPlatform !== UserTypes.APP
    ) {
      res.status(StatusCodes.FORBIDDEN);
      next(new Error('Access denied!'));
    }

    req.body.authData = { userDetails: user };

    next();
  } catch (error) {
    next(error);
  }
}
