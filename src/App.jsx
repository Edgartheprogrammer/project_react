import { useState } from 'react';
import './App.css';
import Boton from './components/Botoncito.jsx';
import Card from './components/cards/card.jsx';

function App() {
  return (
    <>
      <div>
        <h1>Mis compañeros del Bootcamp</h1>
      </div>

      {/* Contenedor de tarjetas con display flex */}
      <div className="card-container">
        <Card
          image="/img/Saitama.jpg"
          title="Omar"
          phrase="Tu Coder de confianza"
          description="Soluciona Bugs de un solo golpe utilizando técnicas de Hacker ético"
          
        />

        <Card
          image="./public/img/mikasa.jpg"
          title="Diana"
          phrase="Enfocada en soluciones"
          description="Transforma tus ideas en realidades visuales excepcionales"
        />

        <Card
          image="/img/Totoro.jpg"
          title="Dante"
          phrase="Puede codear durmiendo"
          description="Utiliza un código impecable en varios lenguajes"
        />
      </div>

      
      <Boton text="Click aquí" color="aqua" />
      <Boton text="Aquí no" color="aqua" />
      <Boton text="Aquí menos" color="aqua" />
    </>
  );
}

export default App;
