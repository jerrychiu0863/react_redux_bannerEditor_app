import React from 'react';
import store from '../store';
import { resetDesign, saveDesign } from '../actions';

import './SideBarFooter.css';

const SideBarFooter = () => {
    
    const state = store.getState();
    const { fontSizeValue, color, colorDegree, typing, fontColor, fontFamily } = state;
    
    const getDate = () => {
          const date = new Date();
          const year = date.getFullYear();
          const monthNames = [
                                "Jan.", "Feb.", 
                                "Mar.", 
                                "Apr.", 
                                "May", 
                                "June",
                                "July", 
                                "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
                            ];
          
           const getDay = () => {
               const day = date.getDate();
               
               if(day < 10) {
               return `0${day}`
                } else {
               return day
                }
           }
           
          return { 
                  month: `${monthNames[date.getMonth()]}`,
                  day: getDay(), 
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
         <div className="SideBarFooter">
           <button 
            onClick={onSaveDesign} 
            className="btn btn-primary btn-sm mr-2"
           >
             SAVE
           </button>
           <button 
            onClick={reset} 
            className="btn btn-outline-primary btn-sm"
           >
            RESET
           </button> 
        </div>
    );  
}

export default SideBarFooter;