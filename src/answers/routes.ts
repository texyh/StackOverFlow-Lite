
import * as express from 'express';
import {Request, Response} from 'express';
import * as Joi from 'joi';
import { validateRequestBody, validateRequestParams } from '../validator';
import  * as controllers from './controllers'
import * as schema from './validationschema';

const routes = express.Router();

routes.post('/:questionId/answers', 
  validateRequestParams(schema.saveAnswer),
  validateRequestBody(Joi.object({answer : Joi.string().min(10).required()})),
  (req: Request, res: Response) => {
    controllers.saveAnswer(req.params.questionId, req.body.answer).then((id) => {
      res.status(201).send({
        id: id,
      });
    }).catch(error => res.status(400).send({ error }));
  });

routes.put('/:questionId/answers/:answerId/mark-correct', 
  validateRequestParams(schema.markCorrect),
  (req: Request, res: Response) => {
  controllers.markAnswerCorrect(req.params.questionId, req.params.answerId).then(() => {
    res.status(200).send()
  }).catch(error => res.status(400).send({error}))
})


export default routes;