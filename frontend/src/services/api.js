import axios from 'axios';

const API = axios.create({
    baseURL: 'https://producthub-2yyq.onrender.com/products', // Backend URL 
});

// Get all products
export const getProducts = () => API.get('/');

// Add a new product
export const addProduct = (product) => API.post('/', product);

// Delete a product by ID
export const deleteProduct = (id) => API.delete(`/${id}`);

