// src/components/Destinations.jsx
import React from 'react';

const Destinations = () => {
  const destinations = [
    { id: 1, name: 'Destino 1', description: 'Descrição do Destino 1' },
    { id: 2, name: 'Destino 2', description: 'Descrição do Destino 2' },
    // Adicione mais destinos conforme necessário
  ];

  return (
    <div className="destinations">
      <h2>Destinos</h2>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
