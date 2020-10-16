const Product = require('../models/product');
const isEmptyObject = require('../utils/is-empty-object');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (e) {
        //console.log(e);
        res.status(500).send('Server is errors.');
    }
}

exports.getProduct = async (req, res) => {
    try {

        const id = req.params.id;

        if (!id) {
            return res.status(400).send('Please provide id of product.');
        }

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).send('Product is not found.');
        }

        res.json(products);
    }
    catch (e) {
        console.log(e);
        res.status(500).send('Server is errors.');
    }
}

exports.createProduct = async (req, res) => {
    try {
        if (!isEmptyObject(req.body)) {
            return res.status(400).json({ errors: 'Please provide more infomation of product.' })
        }
        
        const product = new Product(req.body);
        res.json(product);
    }
    catch (e) {
        console.log(e);
        res.status(500).send('Server is errors.');
    }
};