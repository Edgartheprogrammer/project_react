import React, {useState} from "react";

function Contador () {
    const [contador, setContador] = useState (0);
    return (
        <div>
            <p>cronómetro: {contador}</p>
            
        </div>
    )
}

export default Contador