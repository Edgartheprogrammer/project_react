import React from 'react'
import './Button.css'

const Boton = ({text}) => {
  return (
    // <button type="button">{text}</button>
    <button type="button" onClick={() => console.log(`Enhorabuena: ${text}`)}>
    {text}
  </button>
  )
}

export default Boton