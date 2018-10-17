import React from 'react';
import { setModel } from '../actions';
import store from '../store';
import './SideBarHead.css';

const SideBarHead = () => {

    const openModel = () => {
        store.dispatch(setModel());
    }
    
    return(
        <div className="SideBarHead">
            <button onClick={() => openModel()}><i className="fas fa-bookmark"></i>
            </button>
        </div>
    );
}

export default SideBarHead;