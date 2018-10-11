import React from 'react';

import { setTyping } from '../actions';
import store from '../store';
import './Typing.css';

const Typing = ({value}) => {
    
    const setTypingValue = e => {
        store.dispatch(setTyping(e.target.value))
    }
    
    return(
        <div className="Typing">
           <div className="Typing__header">
               <p>Text</p>
           </div>
            <input type="text" value={value} onChange={setTypingValue} />
        </div>
    );
}

export default Typing;