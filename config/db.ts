import knex from "knex";
import env from "../env";

const DB = knex({
  client: env.DB_DRIVER,
  connection: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
});

export default DB;
