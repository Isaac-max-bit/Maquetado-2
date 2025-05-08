// src/components/ClientDetail.jsx
import React from 'react';

const ClientDetail = ({ client }) => {
  return (
    <div>
      <h2>Detalles del Cliente</h2>
      <p>Nombre: {client.name}</p>
      <p>Email: {client.email}</p>
      <p>Historial: {client.history}</p>
    </div>
  );
};

export default ClientDetail;
