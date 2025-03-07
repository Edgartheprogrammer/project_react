import React from "react";
import './cards.css';

const Card = ({image, title, description }) => {
    return (
        <div className="card">
            <img src="./img/Saitama.jpg" alt="Saitama" />
            <div className="card-content">
            <h2>Omar</h2>
            <h3>Tu Coder de confianza</h3>
            <p> "Resuelve tu Bug de 1 golpe utilizando método de Hacker"</p>
            </div>
            </div>
        );
    
    }
    
    export default Card
            
            
        
