import * as express from 'express';

import userRoutes from './users';
import questionsRoutes from './questions';

const routes = express.Router();

routes.use('/questions', questionsRoutes);
routes.use('/users', userRoutes);

export default routes;
