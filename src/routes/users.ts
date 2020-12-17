
import * as express from 'express';

const userRoutes = express.Router();

userRoutes.post('/signIn', (req, res) => {
  res.send('thanks for logging in');
});

userRoutes.post('/signUp', (req, res) => {
  res.send('thanks for signing up');
});

export default userRoutes;
