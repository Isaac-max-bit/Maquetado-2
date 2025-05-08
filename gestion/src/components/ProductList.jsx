// src/components/ProductList.jsx
import React from 'react';

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map(product => (
        <div key={product.id} onClick={() => onSelectProduct(product)}>
          <h3>{product.name}</h3>
          <button>Ver Detalles</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
