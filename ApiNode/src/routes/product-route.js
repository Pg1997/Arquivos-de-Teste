'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

post('/', controller.post);
put('/:id', controller.put);
delete('/', controller.delete); 

module.export = router;