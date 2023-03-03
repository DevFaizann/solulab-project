const express = require('express');
const router = express.Router();
const {
    createProduct,
    readProductById,
    readProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller.js');

//Create a new product
router.post('/', createProduct);

//Get All products
router.get('/', readProducts);

//get product by id
router.get('/:id', readProductById);

//update a product 
router.put('/:id', updateProduct);

//delete product
router.delete(':id', deleteProduct);

module.exports = router;

