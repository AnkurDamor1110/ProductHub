import React from 'react';
import ProductList from '../components/ProductList';
import './Products.css';

const Products = () => {
  
  return (
    <div className="products-container">
      <div className="product-catalog">
        <h2 className="catalog-title">ProductHub</h2>
        <ProductList  />
      </div>

    </div>
  );
};

export default Products;
