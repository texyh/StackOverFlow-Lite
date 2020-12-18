
import * as express from 'express';

const routes = express.Router();

routes.post('/signIn', (req, res) => {
  res.send('thanks for logging in');
});

routes.post('/signUp', (req, res) => {
  res.send('thanks for signing up');
});

export default routes;
