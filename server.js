const express = require('express');
const _  = require('lodash');
const bodyParser = require('body-parser');

require('./config/config');

const app = express();

app.get('/', (req, res) => {
    res.send({
        text : 'deployed from travis'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`app started at port ${process.env.PORT}`)
})