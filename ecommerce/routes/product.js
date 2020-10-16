const router = require('express').Router();
const { createProduct, getProduct, getProducts, findProducts, editProduct }
    = require('../controllers/product');

//route GET /api/products
router.get('/', getProducts);

//route GET /api/products/:id
router.get('/:id', getProduct);

//route POST /api/product
router.post('/', createProduct);

//router PUT /api/prododuct
router.put('/', editProduct);

//route GET /api/product/find
router.get('/find', findProducts);

module.exports = router;