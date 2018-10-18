import React from 'react';
import SideBarHead from '../components/SideBarHead';
import Color from '../components/Color';
import Font from '../components/Font';
import Typing from '../components/Typing';
import SideBarFooter from '../components/SideBarFooter';


import store from '../store';

const SideBar = () => {
    
    const state = store.getState();
    const {fontSizeValue, color, colorDegree, typing, fontColor, fontFamily, colorLists} = state;
        
    return(
        <div>
           
            <SideBarHead colorLists={colorLists} />
            <Color firstColor={color[0]} secondColor={color[1]} colorDegree={colorDegree} />
            <Font fontSizeValue={fontSizeValue} fontColorValue={fontColor} fontFamilyValue={fontFamily} />
            <Typing value={typing} />
            <SideBarFooter />
            
        </div>
    );
}

export default SideBar;