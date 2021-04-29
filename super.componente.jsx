import React from 'react';

import './super.estilo.css';

const Super = (props) => {
    return (
        <div className="super-cont">

          {
            props.super.cantDisfraces === 0
            ? <span className="super-without-cantDisfraces">{props.super.nombre}</span>
            : 
              <span>{props.super.nombre}</span>
          }
        
          {' '}
          
          {props.super.alquilado === 2
            ?<span className="super-without-alquilado">{props.super.Alquilado}</span>
          :  <span>{props.super.alquilado}</span>

          }
          {' '}
          {
            props.super.cantDisfraces
          }


        </div>   
    );
}

export default Super;