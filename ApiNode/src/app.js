'use strict'

const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Carrega as rotas
const index = require('./routes/index');
const product = require('./routes/product-route');

app.use('/', index);
app.use('/', product);

module.exports = app;