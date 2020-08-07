'user strict';

const mongoose = require('mongoose');
const { v4: uuid } = require('uuid')

const { Schema } = mongoose;
const options = {
    timestamps: true
}

const productSchema = new Schema({
    name: String,
    price: Number,
    count: Number,
    id: { type: String, default: uuid}
}, 
options);

module.exports = mongoose.model('Product', productSchema);