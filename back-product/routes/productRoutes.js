const express = require('express');
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  placeOrder,
} = require('../controllers/productController');

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.post('/place-order', placeOrder);

module.exports = router;
