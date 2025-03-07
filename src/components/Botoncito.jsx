import React from 'react'
import './Button.css'

const Boton = ({text, color}) => {
  return (
    // <button type="button">{text}</button>
    <button
      type='button'
      style={{backgroundColor: color}}
      onClick={() => console.log(`Enhorabuena: ${text}`)}>
    {text}
  </button>
  )
}

export default Boton