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

        res.json(product);
    }
    catch (e) {
        console.log(e);
        res.status(500).send('Server is errors.');
    }
}

exports.createProduct = async (req, res) => {
    try {
        if (isEmptyObject(req.body)) {
            return res.status(400).json({ errors: 'Please provide more infomation of product.' })
        }

        const product = await Product.create(req.body);

        if (req.file) {
            product.imageUrl = req.file.buffer;
            await product.save();
        }
        
        res.json(product);
    }
    catch (e) {
        console.log(e);
        res.status(500).send('Server is errors.');
    }
};

exports.editProduct = async (req, res) => {
    try {
        //Validate a params and body of request.
        const id = req.params.id;
        const productUpdate = req.body;

        if (!id || isEmptyObject(productUpdate)) {
            return res.status(400).send("Please provide id or product.");
        }

        const currentProduct = await Product.findById(id);

        if (!currentProduct) {
            return res.status(404).send("product is not exists.");
        }

        //Validate a object
        const updates = Object.keys(productUpdate);
        const allowUpdates = ['name', 'imageUrl', 'price', 'description', 'manufacturer'
            , 'category', 'conditionProduct', 'quantity'];
        const isValidOperation = updates.every(update => update === 'imageUrl'
            || allowUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({ error: "Invalid update !" });
        }

        updates.forEach(update => currentProduct[update] = productUpdate[update]);

        await currentProduct.save();

        res.json(currentProduct);
    }
    catch (e) {
        console.log(e);
        res.status(500).send('Server is errors.');
    }
};

// query -> /api/product/find?name=iphone12
exports.findProducts = async (req, res) => {
    try {
        const name = req.query.name || ''

        const products = await Product.find({ name: { $regex: new RegExp(name, "i") } });

        res.json(products);
    }
    catch (e) {
        console.log(e);
        res.status(500).send('Server is errors.');
    }
};

exports.deleteProduct = async (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) {
            return res.json({ 'success': false, 'massage': 'Some Error' });
        } return res.json({ 'success': true, 'message': product.name + 'deleted successfully' });
    })
};