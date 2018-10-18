import React from 'react';
import { setModel } from '../actions';
import store from '../store';
import './SideBarHead.css';

const SideBarHead = ({colorLists}) => {

    const openModel = () => {
        store.dispatch(setModel());
    }
    
    return(
        <div className="SideBarHead">
            <button onClick={() => openModel()} className="SideBarHead__btn"><i className={colorLists.length !== 0 ? "fas fa-bookmark icon__active" : "fas fa-bookmark"}></i>
            </button>
        </div>
    );
}

export default SideBarHead;