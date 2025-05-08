// src/pages/ClientsPage.jsx
import React, { useState } from 'react';
import ClientSearch from '../components/ClientSearch';
import ClientList from '../components/ClientList';
import ClientDetail from '../components/ClientDetail';

const ClientsPage = () => {
  const [clients] = useState([
    { id: 1, name: 'Cliente 1', email: 'cliente1@example.com', history: 'Historial 1' },
    { id: 2, name: 'Cliente 2', email: 'cliente2@example.com', history: 'Historial 2' },
    // Agrega más clientes según sea necesario
  ]);
  
  const [selectedClient, setSelectedClient] = useState(null);

  const handleSearch = (searchTerm) => {
    // Lógica para filtrar clientes según el término de búsqueda
    console.log('Buscar cliente:', searchTerm);
  };

  return (
    <div>
      <h1>Gestión de Clientes</h1>
      <ClientSearch onSearch={handleSearch} />
      <ClientList clients={clients} onSelectClient={setSelectedClient} />
      {selectedClient && <ClientDetail client={selectedClient} />}
    </div>
  );
};

export default ClientsPage;
