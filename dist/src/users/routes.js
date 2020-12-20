"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes = express.Router();
routes.post('/signIn', (req, res) => {
    res.send('thanks for logging in');
});
routes.post('/signUp', (req, res) => {
    res.send('thanks for signing up');
});
exports.default = routes;
//# sourceMappingURL=routes.js.map