const express = require('express');
const _  = require('lodash');
const bodyParser = require('body-parser');
require('./config/config');

require('./config/config');

const app = express();

app.get('/', (req, res) => {
    res.send({
        text : 'deployed from travis from github'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`app started at port ${process.env.PORT}`)
})

module.exports = {app}