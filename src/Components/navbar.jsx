import React from 'react';
import React, { useState } from 'react';
import LibroFavorito from './LibroFavorito'; // Importa el componente LibroFavorito

const App = () => {
  const [cart, setCart] = useState([]);

  
  const scrollToForm = () => {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
  };

 
  const scrollToCard = () => {
    document.getElementById('card').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div id="form">
        <h2>Formulario</h2>
        <Form setCart={setCart} /> {}
      </div>
      <div id="card">
        <h2>Libro Favorito</h2>
        <LibroFavorito libro={cart[0]} /> {}
      </div>
    </div>
  );
};

export default App;