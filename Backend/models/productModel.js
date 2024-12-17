const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Product name is required'], // Field is mandatory with a custom error message
    },
    price: { 
        type: Number, 
        required: [true, 'Product price is required'], // Field is mandatory with a custom error message
    },
    category: { 
        type: String, 
        required: [true, 'Product category is required'], // Field is mandatory with a custom error message
    },
});

module.exports = mongoose.model('Product', productSchema);
