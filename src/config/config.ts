import 'dotenv/config';
import { Secret } from 'jsonwebtoken';

const config = {
  DATABASE_CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING ?? '',
  PORT: process.env.PORT,
  SALT_VALUE: Number(process.env.SALT_VALUE) || 10,
  JWT_SECRET: <Secret>process.env.JWT_SECRET ?? '',
  JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH ?? '',
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN ?? '',
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ?? '',
};

export default config;
