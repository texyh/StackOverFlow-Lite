
import dbConnection from './db';
import app from './app';

console.log(process.env.NODE_ENV)
dbConnection().then(x => {
  app.listen(process.env.PORT, () => {
    console.log(`app started at port ${process.env.PORT}`);
  });
})


