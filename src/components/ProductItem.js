import React from 'react';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <img src={product.imageUrl} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Category: {product.category}</p>
    <p>Brand: {product.brand}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
  </div>
);

export default ProductItem;