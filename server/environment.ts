import * as dotenv from 'dotenv';

const result = dotenv.config();

if (result?.error) {
  throw new Error('Add .env file');
}

export const config = {
  env: process.env.ENV,
  appName: process.env.NAME,
  port: process.env.PORT,
  version: process.env.VERSION,
  stackAccessKey: process.env.STACK_ACCESS_KEY,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbPort: +process.env.DB_PORT,
  dbName: process.env.DB_NAME,
};
