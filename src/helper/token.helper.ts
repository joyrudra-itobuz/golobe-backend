import jwt from 'jsonwebtoken';
import { JwtCustomPayload } from '../interfaces/jwt';
import config from '../config/config';

export function tokenGenerator(payload: JwtCustomPayload) {
  const accessToken = jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRES_IN || '4h',
  });

  const refreshToken = jwt.sign(payload, config.JWT_SECRET_REFRESH, {
    expiresIn: config.REFRESH_TOKEN_EXPIRES_IN || '180d',
  });

  return {
    accessToken,
    refreshToken,
  };
}
