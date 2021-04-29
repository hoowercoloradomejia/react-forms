import React from 'react';
import './tabla-principal.estilo.css';
import Mustafa from '../mustafa/mustafa.componente';
import TablaDisfraces from '../tabla-disfraces/tabla-disfraces.componente';


const TablaPrincipal = (props) => {
    return (
        <div className ="tabla-princial-cont">
            <Mustafa/>
            <TablaDisfraces disfrasList={props.disfrasList}/>
            
            
        </div>   
    );
}

export default TablaPrincipal;