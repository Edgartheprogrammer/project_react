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
          image="https://via.placeholder.com/150?text=Compañero+1"
          title="Carlos"
          description="Carlos es un desarrollador backend en potencia, siempre dispuesto a ayudar."
        />

        <Card
          image="./public/img/mikasa.jpg"
          title="Lucía"
          description="Lucía es una increíble diseñadora UX/UI, transformando ideas en experiencias únicas."
        />

        <Card
          image="/img/Totoro.jpg"
          title="David"
          description="David está aprendiendo JavaScript y React con mucha pasión y dedicación."
        />
      </div>

      {/* Botones */}
      <Boton text="Click aquí" color="aqua" />
      <Boton text="Aquí no" color="blue" />
      <Boton text="Aquí menos" color="aqua" />
    </>
  );
}

export default App;
