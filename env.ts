import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const myEnv = dotenv.config();
dotenvExpand(myEnv);
const env = {
  APP_NAME: process.env.APP_NAME ?? "Express App",
  APP_VERSION: process.env.APP_VERSION ?? "1.0.0",
  APP_SECRET: process.env.APP_SECRET ?? "",
  APP_URL: process.env.APP_URL ?? `http://127.0.0.1:${process.env.PORT}`,
  APP_PORT: parseInt(process.env.APP_PORT ?? "8000"),
  DB_DRIVER: process.env.DB_DRIVER ?? "mysql",
  DB_HOST: process.env.DB_HOST ?? "localhost",
  DB_PORT: parseInt(process.env.DB_PORT ?? "3306"),
  DB_USER: process.env.DB_USER ?? "root",
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  FILESYSTEM_DRIVER: process.env.FILESYSTEM_DRIVER ?? 'local' == 'local' ? 'app' : 'public'
};

export default env;
