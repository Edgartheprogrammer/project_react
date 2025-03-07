import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Botoncito.jsx'
import Card from './components/cards/card.jsx'


function App() {
  
  return (
    
    <>
    <div>
      <h1>Mi primera app en React</h1>
    </div>

    <Card/>
    
      <Boton text="Click aquí" color="aqua"/>
      <Boton text="Aquí no" color="blue"/>
      <Boton text="Aquí menos" color="aqua"/>
      

    </>
    
    
  )
}

export default App; 


      
      
      
        


