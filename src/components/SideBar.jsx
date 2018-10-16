import React from 'react';
import SideBarHead from './SideBarHead';
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
                                "Jan.", "Feb.", 
                                "Mar.", 
                                "Apr.", 
                                "May", 
                                "June",
                                "July", 
                                "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
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
            <SideBarHead />
            <Color firstColor={color[0]} secondColor={color[1]} colorDegree={colorDegree} />
            <Font fontSizeValue={fontSizeValue} fontColorValue={fontColor} fontFamilyValue={fontFamily}/>
            <Typing value={typing}/>
            <div>
               <button onClick={onSaveDesign} className="btn">SAVE</button>
               <button onClick={reset}>RESET</button> 
            </div>
            
        </div>
    );
}

export default SideBar;