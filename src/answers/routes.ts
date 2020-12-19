
import * as express from 'express';
import {Request, Response} from 'express';
import { Question } from 'src/models/Question';
import  * as controllers from './controllers'

const routes = express.Router();

routes.post('/:id/answers', (req: Request, res: Response) => {
    controllers.saveAnswer(req.params.id, req.body.answer).then((id) => {
      res.status(201).send({
        id: id,
      });
    }).catch(error => res.status(400).send({ error }));
  });


export default routes;