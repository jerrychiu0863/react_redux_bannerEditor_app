import React from 'react';

import { colorDegrees } from '../static-data';
import store from '../store';
import { setFirstColor, setSecondColor, setColorDegree } from '../actions';
import './Color.css';

const Color = ({ firstColor, secondColor, colorDegree }) => {
    
    const setFirstColorValue = (e) => {
     store.dispatch(setFirstColor(e.target.value))
     
    }
    
    const setSecondColorValue = (e) => {
     store.dispatch(setSecondColor(e.target.value))
      
    }
    
    const setColorDegreeValue = e => {
       store.dispatch(setColorDegree(e.target.value))
    }
    
    return(
        <div className="Color">
          
           <div className="Color__header">
               <p>background Color</p>
           </div>
           <div>
               <p className="Color__label">Color:
                   <input 
                       type="color" 
                       value={firstColor} 
                       onChange={setFirstColorValue} 
                   />
                   <input 
                       type="color" 
                       value={secondColor} 
                       onChange={setSecondColorValue} 
                   /> 
               </p>
           </div>
           <div>
                <p className="Color__label">Degree:
                    <select 
                        value={colorDegree} 
                        onChange={setColorDegreeValue}
                    >
                    {colorDegrees.map( c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </p>
           </div>
            
        </div>
    );
}

export default Color;