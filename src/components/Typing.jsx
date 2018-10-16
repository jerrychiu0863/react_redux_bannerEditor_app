import React from 'react';

import { setTyping, clearTyping } from '../actions';
import store from '../store';
import './Typing.css';

const Typing = ({value}) => {
    
    const setTypingValue = e => {
        store.dispatch(setTyping(e.target.value))
    }
    
    const clearTypingValue = () => {
        store.dispatch(clearTyping());
    }
    
    return(
        <div className="Typing">
           <div className="Typing__header">
               <p>Text</p>
           </div>
            <textarea type="text" value={value} onChange={setTypingValue} style={{height: "50px", width: "180px", resize: "none"}}></textarea>
            <div>
                <button onClick={clearTypingValue}>Clear Text</button>
            </div>
        </div>
    );
}

export default Typing;