const express = require('express');

const api = require('./routes/api');

const app = express();
app.use(express.json());

const PORT = 8080;

app.use('/', api);

module.exports = app;