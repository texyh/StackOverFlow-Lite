"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers = require("./controllers");
const routes = express.Router();
routes.get('/', (req, res) => {
    controllers.getAll().then((questions) => {
        res.send({
            results: questions,
        });
    }).catch(() => res.status(400).send({ error: 'An Error Occured' }));
});
routes.get('/:id', (req, res) => {
    controllers.get(req.params.id).then((question) => {
        res.send({
            results: question,
        });
    }).catch(() => res.status(400).send({ error: 'No question with that id exist' }));
});
routes.post('/', (req, res) => {
    controllers.save(req.body.question).then((id) => {
        res.status(201).send({
            id: id,
        });
    }).catch(() => res.status(404).send({ error: 'An Error Occured' }));
});
exports.default = routes;
//# sourceMappingURL=routes.js.map