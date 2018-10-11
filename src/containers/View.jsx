import React from 'react';

import store from '../store';
import './View.css';

const View = () => {
    const state = store.getState();
    const { color, fontSizeValue, colorDegree, typing } = state;
    const h1Style = {
          fontSize: `${fontSizeValue}px`,
          backgroundImage: `linear-gradient(${colorDegree}deg, ${color[0]}, ${color[1]})`,
          height: "500px",
          textAlign: "center"
    }
    
    return(
        <div className="View">
             <h1 style={h1Style}>{typing}</h1>

        </div>
    );
}

export default View;


      