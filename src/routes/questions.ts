import * as express from 'express';
import {Request, Response} from 'express';
import  * as questionsController from '../controllers'

const questionRoutes = express.Router();


questionRoutes.get('/', (req: Request, res: Response) => {
  questionsController.getAll().then((questions) => {
    res.send({
      results: questions,
    });
  }).catch(() => res.status(400).send({ error: 'An Error Occured' }));
});

questionRoutes.get('/:id', (req: Request, res: Response) => {
  questionsController.get(+req.params.id).then((question) => {
    res.send({
      results: question,
    });
  }).catch(() => res.status(400).send({ error: 'No question with that id exist' }));
});

questionRoutes.post('/', (req: Request, res: Response) => {
  questionsController.save(req.body.question).then((question) => {
    res.status(201).send({
      results: question,
    });
  }).catch(() => res.status(404).send({ error: 'An Error Occured' }));
});

questionRoutes.post('/:id/answers', (req: Request, res: Response) => {
  questionsController.addAnswer(+req.params.id, req.body.answer).then((answer) => {
    res.status(201).send({
      results: answer,
    });
  }).catch(error => res.status(400).send({ error }));
});

export default questionRoutes;
