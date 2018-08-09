const express = require('express');
const _  = require('lodash');
const bodyParser = require('body-parser');

require('./config/config');
const routes = require('./app/routes')

const app = express();

app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({
        text : 'deployed from travis from github'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`app started at port ${process.env.PORT}`)
})


// for testing
module.exports = {app}