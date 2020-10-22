const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: String,
    imageUrl: Buffer,
    price: Number,
    description: String,
    manufacturer: String,
    category: String,
    conditionProduct: String,
    quantity: Number,
    reviews: [{
        name: String,
        comment: String,
        date: Date
    }]
}, {
    timeStamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;