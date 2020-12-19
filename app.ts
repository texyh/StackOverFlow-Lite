
import * as express from 'express';
import * as bodyParser from 'body-parser';
import questionRoutes  from './src/questions/routes';
import userRoutes from './src/users/routes';
import answerRoutes from './src/answers/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send({api: "api version 1"}));
app.use('/questions', questionRoutes);
app.use('/users', userRoutes);
app.use('/answers', answerRoutes);

export default app;
