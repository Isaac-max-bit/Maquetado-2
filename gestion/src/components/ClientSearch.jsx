// src/components/ClientSearch.jsx
import React, { useState } from 'react';

const ClientSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar cliente" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Ver</button>
    </div>
  );
};

export default ClientSearch;
