import React from 'react';
import ListItem from '../components/ListItem';
import ListView from '../components/ListView';
import store from '../store';
import { setModel } from '../actions';

import './ListModel.css';

const ListModel = ({isModelOpen}) => {
    const state = store.getState();
    const {colorLists, activeColorList} = state;
    
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
                <ListView activeList={activeColorList} />
            </div>
             <button onClick={() => closeModel()} className="ListModel__btn">X</button>
            </div>
        </div>
    );
}

export default ListModel;