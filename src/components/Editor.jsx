import React from 'react';
import List from './List';
import Color from './Color';
import Font from './Font';

import store from '../store';

const Editor = () => {
    
    const state = store.getState();
    const {fontSizeValue, color, colorDegree} = state;
    
    return(
        <div>
            <List />
            <Color firstColor={color[0]} secondColor={color[1]} colorDegree={colorDegree} />
            <Font fontSizeValue={fontSizeValue} />
        </div>
    );
}

export default Editor;