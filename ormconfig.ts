import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
console.log('============== ' + process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "host": process.env.DATEBASE_HOST,
  "port": 5432,
  "username": process.env.DATEBASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "url": process.env.DATABASE_URL,
  "synchronize": true,
  "logging": false,
  "entities": [
     "src/models/**/*.ts"
  ],
  "migrations": [
     "src/migrations/**/*.ts"
  ],
  "subscribers": [
     "src/subscriber/**/*.ts"
  ],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
