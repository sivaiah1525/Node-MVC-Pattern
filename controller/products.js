'use strict';
const productModel = require('../model/product');
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({}).lean();
        res.json(products)
    } catch (error) {
        res.send(error)
    }
};

const createProduct = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = new productModel(body);
        const result = await newProduct.save();
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await productModel.findOneAndUpdate({ id: req.params.id }, req.body)
        res.json(product)
    } catch (error) {
        res.send(error)
    }
}

const getProduct = async (req, res) => {
    try {
        const params = req.params;
        const product = await productModel.findOne({ id: params.id }).lean();
        res.json(product)
    } catch (error) {
        res.send(error)
    }
};
const deletedProduct = async (req, res) => {
    try {
        const params = req.params;
        const product = await productModel.findOneAndDelete({ id: params.id });
        res.json(product)
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    getProduct,
    deletedProduct
}
