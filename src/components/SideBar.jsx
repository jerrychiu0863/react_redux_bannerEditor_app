import React from 'react';
import List from './List';
import Color from './Color';
import Font from './Font';
import Typing from './Typing';

import store from '../store';

const SideBar = () => {
    
    const state = store.getState();
    const {fontSizeValue, color, colorDegree, typing} = state;
    
    return(
        <div>
            <List />
            <Color firstColor={color[0]} secondColor={color[1]} colorDegree={colorDegree} />
            <Font fontSizeValue={fontSizeValue} />
            <Typing value={typing}/>
            <div>
               <button>SAVE</button>
               <button>RESET</button> 
            </div>
            
        </div>
    );
}

export default SideBar;