import React from 'react';
import TablaPrincipal from './componentes/tabla-principal/tabla-principal.componente';
import TablaForms from './componentes/tabla-forms/tabla-forms.componente';

const DisfrazPage = () => {
           let disfrasList = [
                
                {
                        id:"d1",
                        name:'Villanos',
                        disfraces:[
                            {
                                id:"d1d1",
                                nombre:"Magneto",
                                alquilado:10,
                                cantDisfraces:12,
                            },
                            {
                                id:"d1d2",
                                nombre:"Joker",
                                alquilado:10,
                                cantDisfraces:12,
                            },
                            {
                                id:"d1d3",
                                nombre:"Dos Caras",
                                alquilado:10,
                                cantDisfraces:12,
                            },
                            {
                                id:"d1d4",
                                nombre:"Espantapajaros",
                                alquilado:10,
                                cantDisfraces:12,
                            },
                            {
                                id:"d1d5",
                                nombre:"Acertijo",
                                alquilado:10,
                                cantDisfraces:12,
                            }

                        ]
                    },
                    {
                        id:"d2",
                        name:'SuperHeroes',
                        disfraces:[
                            {
                                id:"d2d1",
                                nombre:"Thor",
                                alquilado:1,
                                cantDisfraces:10,
                            },
                            {
                                id:"d2d2",
                                nombre:"Superman",
                                alquilado:1,
                                cantDisfraces:10,
                            },
                            {
                                id:"d2d3",
                                nombre:"Batman",
                                alquilado:1,
                                cantDisfraces:10,
                            },
                            {
                                id:"d2d4",
                                nombre:"IronMan",
                                alquilado:1,
                                cantDisfraces:10,
                            },
                            {
                                id:"d2d5",
                                nombre:"Capitan America",
                                alquilado:1,
                                cantDisfraces:10,
                            },
                            {
                                id:"d2d6",
                                nombre:"Linterna Verde",
                                alquilado:1,
                                cantDisfraces:10,
                            },

                        ] 
                    },

                    {
                        id:"d3",
                        name:'Animes',
                        disfraces:[
                           
                            {
                                id:"d3d1",
                                nombre:"Goku",
                                alquilado:0,
                                cantDisfraces:8,
                            },
                            {
                                id:"d3d2",
                                nombre:"Samurai",
                                alquilado:0,
                                cantDisfraces:8,
                            },
                            {
                                id:"d3d3",
                                nombre:"Naruto",
                                alquilado:0,
                                cantDisfraces:8,
                            },
                            {
                                id:"d3d4",
                                nombre:"Salen Moon",
                                alquilado:0,
                                cantDisfraces:8,
                            },
                            {
                                id:"d3d5",
                                nombre:"Titanes",
                                alquilado:0,
                                cantDisfraces:8,
                            },
                        ]
                    }
                        
                    
                ];

           

           

    return (
        <div>
            <TablaPrincipal disfrasList={disfrasList}/>
            <TablaForms/>

                       
        </div>
       
    );
}
export default DisfrazPage;

