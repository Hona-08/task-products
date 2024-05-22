const db = require('../models');
const { splitOrderIntoPackages } = require('../utils/packageUtils');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, price, weight } = req.body;
  try {
    const newProduct = await db.Product.create({ name, price, weight });
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, weight } = req.body;
  try {
    const product = await db.Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.name = name;
    product.price = price;
    product.weight = weight;
    await product.save();
    res.json(product);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await db.Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Place order and split into packages
const placeOrder = async (req, res) => {
  const { selectedItems } = req.body;
  if (!Array.isArray(selectedItems) || !selectedItems.length) {
    return res.status(400).json({ error: 'Invalid items' });
  }

  try {
    const products = await db.Product.findAll({
      where: {
        id: selectedItems,
      },
    });

    const packages = splitOrderIntoPackages(products);
    res.json({ packages });
  } catch (err) {
    console.error('Error fetching products for order:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct, placeOrder };
