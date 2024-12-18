import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../services/api'; // import Api calls
import './ProductList.css';
import AddProductForm from './AddProductForm'; // Import AddProductForm

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [showDialog, setShowDialog] = useState(false); // State for dialog visibility

  // Function to fetch products from the API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  // Function to delete products from the API
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (!confirmed) return;

    setLoading(true);
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product!');
    } finally {
      setLoading(false);
    }
  };

  // Method to handle adding a new product
  const handleProductAdded = () => {
    // Re-fetch products after adding a new product
    fetchProducts();
    setShowDialog(false); // Close the dialog
  };

  return (
    // Display products
    <div className="container">
      <h1 className="text-center">Product List</h1>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-detail">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="product-detail">
              <strong>Category:</strong> {product.category}
            </p>
            <div className="button-container">
              <button
                onClick={() => handleDelete(product._id)}
                className="delete-button"
              >
                 Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Button to show AddProductForm */}
      <div className="fixed-add-button">
      <button
        className="add-product-button"
        onClick={() => setShowDialog(true)}
      >
        Add New Product
      </button>
      </div>

     

      {/* Dialog to add product */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <button
              className="dialog-close-button"
              onClick={() => setShowDialog(false)}
            >
              &times;
            </button>
            <h3 className="dialog-title">Add New Product</h3>
            <AddProductForm closeDialog={() => setShowDialog(false)} onProductAdded={handleProductAdded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
