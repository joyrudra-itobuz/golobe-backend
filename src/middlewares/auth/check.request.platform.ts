import { Request, Response, NextFunction } from 'express';
import { UserTypes } from '../../enums/types.enum';
import StatusCodes from '../../enums/statusCodes.enum';

export default async function checkRequestPlatform(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const headerType = req.headers.app;

    if (!headerType) {
      res.status(StatusCodes.FORBIDDEN);
      throw new Error('Denied');
    }

    let reqPlatform = '';

    if (headerType === UserTypes.ADMIN) {
      reqPlatform = UserTypes.ADMIN;
    } else {
      reqPlatform = UserTypes.APP;
    }

    req.body.authData = { reqPlatform };

    next();
  } catch (error) {
    next(error);
  }
}
