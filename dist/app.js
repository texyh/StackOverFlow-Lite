"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./src/questions/routes");
const routes_2 = require("./src/users/routes");
const routes_3 = require("./src/answers/routes");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send({ api: "api version 1" }));
app.use('/questions', routes_1.default);
app.use('/users', routes_2.default);
app.use('/questions', routes_3.default);
exports.default = app;
//# sourceMappingURL=app.js.map