"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers = require("./controllers");
const routes = express.Router();
routes.post('/:id/answers', (req, res) => {
    controllers.saveAnswer(req.params.id, req.body.answer).then((id) => {
        res.status(201).send({
            id: id,
        });
    }).catch(error => res.status(400).send({ error }));
});
routes.put('/:quesionId/answers/:answerId/mark-correct', (req, res) => {
    controllers.markAnswerCorrect(req.params.questionId, req.params.answerId).then(() => {
        res.status(200).send();
    }).catch(error => res.status(400).send({ error }));
});
exports.default = routes;
//# sourceMappingURL=routes.js.map