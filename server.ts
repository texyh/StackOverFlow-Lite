
import dbConnection from './db';
import app from './app';
import 'module-alias/register';

dbConnection().then(x => {
  app.listen(process.env.PORT, () => {
    console.log(`app started at port ${process.env.PORT}`);
  });
})


