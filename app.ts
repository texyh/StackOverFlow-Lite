
import * as express from 'express';
import * as bodyParser from 'body-parser';
import './config/config';
import routes from './src/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

export default app;
