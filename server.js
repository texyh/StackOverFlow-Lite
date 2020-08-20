
const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`app started at port ${process.env.PORT}`);
});

