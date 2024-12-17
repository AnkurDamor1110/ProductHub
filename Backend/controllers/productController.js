const Product = require('../models/productModel');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        // res.json(products);
        res.status(200).send({ message: "Products fetched successfully", success: true, data: products });
    } catch (error) {
        res.status(500).send({ message: "Error creating ", success: false, error });
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, price, category } = req.body;
    console.log(req.body)
    const newProduct = new Product({ name, price, category });

    try {
        const savedProduct = await newProduct.save();
        console.log(savedProduct);
        res.status(200).send({ message: "Products Add successfully", success: true, data: savedProduct });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error", success: false, error });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        // res.status(200).json({ message: 'Product deleted successfully' });
        res.status(200).send({ message: "Product deleted successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
