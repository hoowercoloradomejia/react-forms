import React from 'react';
import './tabla-disfraces.estilo.css';
    

const TablaDisfraces = (props) => {

    //console.log({props});

    return (
        <div className="tabla-disfraz-cont">
                {props.disfrasList.map((disfraz, index)=>{
                    return (
                    <React.Fragment key ={disfraz.id}>
                    <nombreVillano nombreVillano={disfraz.name}/>
                    {disfraz.disfraces.map((disfraces, indexdisfraces)=>{
                        return (
                            <Villano key={nombreVillano.id}
                             disfraces={disfraces}/>
                        )
                    })}
                    </React.Fragment>);
                })}                 
                 
        </div>
    );
    
}

export default TablaDisfraces;