import React from 'react';

import store from '../store';
import { setFontSize } from '../actions';
import {fontSizes} from '../static-data';
import './Font.css';

const Font = ({fontSizeValue}) => {
    
    const setFontSizeValue = (e) => {
        store.dispatch(setFontSize(e.target.value));
     
    }
    
    return(
        <div className="Font">
           <div className="Font__header">
               <p>Font</p>
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
                   <input type="color" />
              </p>
           </div>
            
    
        </div>
    );
}

export default Font;