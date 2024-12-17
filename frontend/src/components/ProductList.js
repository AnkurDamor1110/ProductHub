import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../services/api';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // Fetch all products when the component mounts
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log(id);
            await deleteProduct(id);
            setProducts(products.filter(product => product.id !== id)); // Update the state
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };


    return (
        <div>
            <h1>Product List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
