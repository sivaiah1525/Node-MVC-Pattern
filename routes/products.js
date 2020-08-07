'use strict';

const express = require('express');
const productController = require('../controller/products');
const productRouter = express.Router();


productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct)


productRouter.route('/:id')
    .put(productController.updateProduct)
    .get(productController.getProduct)
    .delete(productController.deletedProduct)
    


module.exports = productRouter;