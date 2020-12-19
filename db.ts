import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}.env.${process.env.NODE_ENV}` })

console.log(__dirname + "src/models/*{.js,.ts}");
const dbConnection = ({enableLogging } = {enableLogging : true}) => {
  return createConnection({
    logging: enableLogging,
    type: 'postgres',
    migrationsRun: true,
    entities: [__dirname + "/src/models/*{.js,.ts}"],
    host: process.env.DATEBASE_HOST,
    port: 5432,
    username: process.env.DATEBASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    url: process.env.DATABASE_URL,
  });
};


export default dbConnection;
