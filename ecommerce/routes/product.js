const router = require('express').Router();
const { createProduct, getProduct, getProducts, findProducts, editProduct, deleteProduct }
    = require('../controllers/product');
const upload = require('../utils/upload');

//route GET /api/products
router.get('/', getProducts);

//route GET /api/product/find
router.get('/find', findProducts);

//route GET /api/products/:id
router.get('/:id', getProduct);

//route POST /api/product
router.post('/', upload.single('image'), createProduct);

//router PUT /api/prododuct/:id
router.put('/:id', editProduct);

//router DELETE /api/prododuc/:id
router.delete('/:id', deleteProduct);

module.exports = router;