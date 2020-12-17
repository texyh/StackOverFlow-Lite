"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = new express_1.Router();
userRoutes.post('/signIn', (req, res) => {
    res.send('thanks for logging in');
});
userRoutes.post('/signUp', (req, res) => {
    res.send('thanks for signing up');
});
exports.default = userRoutes;
//# sourceMappingURL=users.js.map