// src/components/ClientList.jsx
import React from 'react';

const ClientList = ({ clients, onSelectClient }) => {
  return (
    <div>
      <h2>Lista de Clientes</h2>
      {clients.map(client => (
        <div key={client.id} onClick={() => onSelectClient(client)}>
          <h3>{client.name}</h3>
          <button>Ver Detalles</button>
        </div>
      ))}
    </div>
  );
};

export default ClientList;
