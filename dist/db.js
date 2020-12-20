"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}.env.${process.env.NODE_ENV}` });
const dbConnection = (enableLogging = true, name = "default") => {
    return typeorm_1.createConnection({
        logging: enableLogging,
        name: name,
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
exports.default = dbConnection;
//# sourceMappingURL=db.js.map