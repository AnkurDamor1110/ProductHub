import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';
import './Products.css';

const Products = () => {
  
  return (
    <div className="products-container">
      <div className="product-catalog">
        <h2 className="catalog-title">Product Catalog</h2>
        <ProductList  />
      </div>

    </div>
  );
};

export default Products;
