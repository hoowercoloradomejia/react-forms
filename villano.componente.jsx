import React from 'react';
import './villano.estilo.css';

const Villano = (props) => {
    return (
        <div className="villano-cont" >
          {props.nombreVillano}
        </div>   
    );
}

export default Villano;