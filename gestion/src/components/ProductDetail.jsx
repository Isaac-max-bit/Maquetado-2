// src/components/ProductDetail.jsx
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>Detalles del Producto</h2>
      <img src={product.image} alt={product.name} />
      <p>Nombre: {product.name}</p>
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetail;
