
import * as express from 'express';
import {Request, Response} from 'express';
import { Question } from 'src/models/question';
import  * as controllers from './controllers'

const routes = express.Router();

routes.post('/:id/answers', (req: Request, res: Response) => {
    controllers.addAnswer(+req.params.id, req.body.answer).then((answer) => {
      res.status(201).send({
        results: answer,
      });
    }).catch(error => res.status(400).send({ error }));
  });


export default routes;