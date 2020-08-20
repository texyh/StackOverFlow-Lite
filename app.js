const express = require('express');
const bodyParser = require('body-parser');

require('./config/config');
const routes = require('./app/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.get('/', (req, res) => {
    res.send({
        text: 'deployed from travis from github',
    });
});


module.exports = app;
