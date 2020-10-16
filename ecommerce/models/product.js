const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: String,
    imageUrl: String,
    price: Number,
    description: String,
    manufacturer: String,
    category: String,
    conditionProduct: String,
    quantity: Number
}, {
    timeStamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;