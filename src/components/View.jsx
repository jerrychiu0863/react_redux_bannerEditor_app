import React from 'react';

import store from '../store';
import './View.css';

const View = () => {
    const state = store.getState();
    const { color, fontSizeValue } = state;
    const h1Style = {
          fontSize: `${fontSizeValue}px`,
          backgroundImage: `linear-gradient(45deg, ${color[0]}, ${color[1]})`,
          height: "500px"
    }
    
    return(
        <div className="View">
             <h1 style={h1Style}>Hello World!</h1>
        </div>
    );
}

export default View;


      