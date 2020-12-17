"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_1 = require("./users");
const questions_1 = require("./questions");
const routes = express.Router();
routes.use('/questions', questions_1.default);
routes.use('/users', users_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map