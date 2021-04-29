import React from 'react';
import './tabla-forms.estilo.css';
import 'DisfrazPage';

const TablaForms = () => {
    return (
        <div className ="tabla-forms-cont">
            <div>
            <form>
                <table>
                    <tr>
                        <td>
                        Disfraces
                        </td>
                       
                    </tr>
                <tr>
                    <td>
                    <select>
                    <option value="d1">Villanos</option>
                    <option value="d2">SuperHeroes</option>
                    <option value="d3">Animes</option>
                    </select>
                    </td>
                
                </tr>
                <tr>
                <td>Nombre Disfraz</td>
                </tr>
                <tr>
                    
                    <td><input type="text"/></td>
                </tr>
                <tr>
                <td>Cantidad de Disfraz</td>
                </tr>
                <tr>
                    
                    <td><input type="text"/></td>
                </tr>
                <tr>
                <td>Alquilado</td>
                </tr>
                <tr>
                    
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <button>Agregar Disfraz</button>
                </tr>
                </table>
            </form>
            </div>
            
        </div>   
    );
}

export default TablaForms;