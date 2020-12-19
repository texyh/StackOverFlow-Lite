
import dbConnection from 'db';
import app from './app';

dbConnection().then(x => {
  app.listen(process.env.PORT, () => {
    console.log(`app started at port ${process.env.PORT}`);
  });
})


