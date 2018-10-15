import React from 'react';

import store from '../store';
import { setFontSize, setFontColor, setFontFamily } from '../actions';
import { fontSizes, fontFamilies } from '../static-data';
import './Font.css';

const Font = ({fontSizeValue, fontColorValue, fontFamilyValue}) => {
    
    const setFontSizeValue = (e) => {
        store.dispatch(setFontSize(e.target.value));
     
    }
    
    const setFontColorValue = e => {
        store.dispatch(setFontColor(e.target.value));
    }
    
    const setFontFamilyValue = e => {
        store.dispatch(setFontFamily(e.target.value))
    }
    
    return(
        <div className="Font">
           <div className="Font__header">
               <p>Font</p>
           </div>
           <div>
               <p>Font: 
                  <select onChange={setFontFamilyValue} value={fontFamilyValue}>
                   {fontFamilies.map( f => <option key={f} value={f}>{f}</option>)}
                  </select>
              </p>
           </div>
           <div>
               <p>Size: 
                  <select onChange={setFontSizeValue} value={fontSizeValue}>
                   {fontSizes.map( f => <option key={f} value={f}>{f}</option>)}
                  </select>
              </p>
           </div>
           <div>
               <p>Color:  
                   <input type="color" onChange={setFontColorValue} value={fontColorValue} />
              </p>
           </div>
            
    
        </div>
    );
}

export default Font;