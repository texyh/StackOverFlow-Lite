"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
require("./config/config");
const routes_1 = require("./app/routes");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map