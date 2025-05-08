// src/components/ProductSearch.jsx
import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar producto" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Ver</button>
    </div>
  );
};

export default ProductSearch;
