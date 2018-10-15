import React from 'react';
import List from './List';
import Color from './Color';
import Font from './Font';
import Typing from './Typing';

import { resetDesign, saveDesign } from '../actions';
import store from '../store';

const SideBar = () => {
    
    const state = store.getState();
    const {fontSizeValue, color, colorDegree, typing, fontColor, fontFamily} = state;
    
    const getDate = () => {
          const date = new Date();
          let year = date.getFullYear();
          const monthNames = [
                                "January", "February", 
                                "March", 
                                "April", 
                                "May", 
                                "June",
                                "July", 
                                "August", "September", "October", "November", "December"
                            ];
          let day = date.getDate();
          return { 
                  month: `${monthNames[date.getMonth()]}`,
                  day: `${day}`, 
                  year: `${year}`
                 }
    }
    
    const reset = () => {
        store.dispatch(resetDesign());
    }
    
    const onSaveDesign = () => {
        store.dispatch(saveDesign(color, colorDegree, fontFamily, fontSizeValue, fontColor, typing, getDate()));
    }
    
    return(
        <div>
            <List />
            <Color firstColor={color[0]} secondColor={color[1]} colorDegree={colorDegree} />
            <Font fontSizeValue={fontSizeValue} fontColorValue={fontColor} fontFamilyValue={fontFamily}/>
            <Typing value={typing}/>
            <div>
               <button onClick={onSaveDesign}>SAVE</button>
               <button onClick={reset}>RESET</button> 
            </div>
            
        </div>
    );
}

export default SideBar;