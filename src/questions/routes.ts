import * as express from 'express';
import {Request, Response} from 'express';
import  * as controllers from './controllers'

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  controllers.getAll().then((questions) => {
    res.send({
      results: questions,
    });
  }).catch(() => res.status(400).send({ error: 'An Error Occured' }));
});

routes.get('/:id', (req: Request, res: Response) => {
  controllers.get(+req.params.id).then((question) => {
    res.send({
      results: question,
    });
  }).catch(() => res.status(400).send({ error: 'No question with that id exist' }));
});

routes.post('/', (req: Request, res: Response) => {
  controllers.save(req.body.question).then((question) => {
    res.status(201).send({
      results: question,
    });
  }).catch(() => res.status(404).send({ error: 'An Error Occured' }));
});

export default routes;
