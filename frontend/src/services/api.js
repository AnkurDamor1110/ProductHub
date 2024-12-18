import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/products', 
});

// Get all products
export const getProducts = () => API.get('/');

// Add a new product
export const addProduct = (product) => API.post('/', product);

// Delete a product by ID
export const deleteProduct = (id) => API.delete(`/${id}`);


export const updateProductCategory = (id) => API.patch(`/${id}`);
