import React, { useState } from 'react';
import { addProduct } from '../services/api';
import './AddProductForm.css';

const AddProductForm = ({ closeDialog, onProductAdded }) => {
  const [name, setName] = useState(''); // state for data store
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price, category };

    setLoading(true); // Show loading spinner
    try {
      await addProduct(newProduct); // Add product to the backend
      setName(''); // Clear form fields
      setPrice('');
      setCategory('');
      alert('Product added successfully!');
      closeDialog(); // Close the dialog after adding the product
      onProductAdded(); // Call onProductAdded to refresh the product list
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    // logic for loading and form for input data
    <div className="form-container">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-actions">
          <button
            type="button"
            onClick={closeDialog}
            className="button button-cancel"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button button-submit"
            disabled={loading} // Disable submit button when loading
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
