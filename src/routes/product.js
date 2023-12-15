const express = require('express');
const { productController } = require('../controller');
const { productValidation } = require('../validation');

const router = express.Router();
// http://localhost:3000/api/product/save
router.get('/product/save', productController.storeApiData); // save api data into database.
// http://localhost:3000/api/product
router.post('/product', productValidation.validationCreateProduct, productController.create); // create product.
// http://localhost:3000/api/product || http://localhost:3000/api/product?search=title&category=category_name
router.get('/product', productController.get); // fetch list of products with search and filter.
// http://localhost:3000/api/product/:id
router.put('/product/:id', productController.update); // update product by id.
// http://localhost:3000/api/product/:id
router.delete('/product/:id', productController.delete); // delete product by id.
module.exports = router;
