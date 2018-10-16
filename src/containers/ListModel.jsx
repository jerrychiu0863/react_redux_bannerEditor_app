import React from 'react';
import ListItem from '../components/ListItem';
import store from '../store';
import { setModel } from '../actions';

import './ListModel.css';

const ListModel = ({isModelOpen}) => {
    const state = store.getState();
    const {colorLists} = state;
    
    const getClassName = value => {
        let className = "ListModel "
        
        if(value) {
            className += "active"
        } else {
            return className
        }
         return className;   
    }
    
    const closeModel = () => {
        store.dispatch(setModel());
    }
    
    return(
        <div className={getClassName(isModelOpen)}>
            <div className="ListModel__content">
            <div className="ListModel__content--left">
                  {colorLists.map( c => <ListItem colorList={c} key={c.id} />)}
            </div>
            <div className="ListModel__content--right">
                
            </div>
             <button onClick={() => closeModel()}>X</button>
            </div>
        </div>
    );
}

export default ListModel;