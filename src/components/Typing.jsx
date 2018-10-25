import React from 'react';

import { setTyping, clearTyping } from '../actions';
import store from '../store';
import './Typing.css';

const Typing = ({ value }) => {
    
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
            <textarea 
                type="text" 
                value={value} 
                onChange={setTypingValue}
            >
            </textarea>
            <div>
                <button 
                    onClick={clearTypingValue}
                    className="btn btn-outline-primary btn-sm Typing__clearBtn"
                >
                    Clear Text
                </button>
            </div>
        </div>
    );
}

export default Typing;