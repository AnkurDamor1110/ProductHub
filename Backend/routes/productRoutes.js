const express = require('express');
const { getProducts, addProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

// set router for backend endpoints
router.get('/', getProducts); // for retrive data
router.post('/', addProduct); // for add new data
router.delete('/:id', deleteProduct); // for delete data

module.exports = router;
