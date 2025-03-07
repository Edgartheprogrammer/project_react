import React from "react";
import './cards.css';

const Card = ({image, title, phrase, description }) => {
const handleClick=() => {
    alert(`Has hecho click en ${title}`)
}    
    return (
        
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
            <h2>{title}</h2>
            <h3>{phrase}</h3>
            <p>{description}</p>
            <button onClick={handleClick}>Click aquí</button>
            </div>
            </div>
        );
    
    }
    
    export default Card
            
            
        
