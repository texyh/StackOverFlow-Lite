
import * as express from 'express';
import {Request, Response} from 'express';
import  * as controllers from './controllers'

const routes = express.Router();

routes.post('/:id/answers', (req: Request, res: Response) => {
    controllers.saveAnswer(req.params.id, req.body.answer).then((id) => {
      res.status(201).send({
        id: id,
      });
    }).catch(error => res.status(400).send({ error }));
  });

routes.put('/:quesionId/answers/:answerId/mark-correct', (req: Request, res: Response) => {
  controllers.markAnswerCorrect(req.params.questionId, req.params.answerId).then(() => {
    res.status(200).send()
  }).catch(error => res.status(400).send({error}))
})


export default routes;