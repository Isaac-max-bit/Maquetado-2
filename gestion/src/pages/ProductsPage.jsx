// src/pages/ProductsPage.jsx
import React, { useState } from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';

const ProductsPage = () => {
  const [products] = useState([
    { id: 1, name: 'Producto 1', description: 'Descripción 1', price: 100, stock: 10, image: 'url_imagen_1' },
    { id: 2, name: 'Producto 2', description: 'Descripción 2', price: 200, stock: 5, image: 'url_imagen_2' },
    // Agrega más productos según sea necesario
  ]);
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (searchTerm) => {
    // Lógica para filtrar productos según el término de búsqueda
    console.log('Buscar producto:', searchTerm);
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductSearch onSearch={handleSearch} />
      <ProductList products={products} onSelectProduct={setSelectedProduct} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  );
};

export default ProductsPage;
