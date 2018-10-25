import React from 'react';
import ListItem from '../components/ListItem';
import ListView from '../components/ListView';
import store from '../store';
import { setModel, deleteAllDesign } from '../actions';

import cssLogo from '../css.svg'
import './ListModel.css';

const ListModel = () => {
    const state = store.getState();
    const { colorLists, activeColorList, isModelOpen } = state;
        
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
    
    const renderListView = list => {
        const { colorLists } = state;
        
        if(Object.keys(list).length === 0 ||  colorLists.length === 0) {
            return <div className="ListModel__empty">
                    <img 
                        src={cssLogo} 
                        alt="img" 
                        className="ListModel__empty--img" 
                    />
                    <p>
                        Please Click The Design On The Left To Generate CSS Code!
                    </p>
                    <div className="ListModel__empty--author">
                        Icons made by 
                        <a  href="https://www.flaticon.com/authors/smashicons" 
                         title="Smashicons"
                        >
                            Smashicons
                        </a> 
                            from 
                        <a 
                         href="https://www.flaticon.com/" title="Flaticon"
                        >
                            www.flaticon.com
                        </a> 
                            is licensed by 
                        <a  href="http://creativecommons.org/licenses/by/3.0/" 
                         title="Creative Commons BY 3.0"
                        >
                        CC 3.0 BY
                        </a>
                    </div>
                  </div>
        } else {
            return <ListView colorList={list} />
        }
    }
    
    const onDeleteAllDesign = () => {
        store.dispatch(deleteAllDesign());
    }
    
    return(
        <div className={getClassName(isModelOpen)}>
            <div className="ListModel__content">
                <div className="ListModel__content--left">
                      {colorLists.map( c => <ListItem colorList={c} key={c.id} isActive={c.isActive} />)}
                      
                      {colorLists.length !== 0 
                        ? <button 
                            onClick={() => onDeleteAllDesign()} className="btn btn-secondary btn-sm mt-2 deleteAllBtn"
                          >
                            Delete All
                          </button> 
                        : null
                      }
                </div>
                <div className="ListModel__content--right">
                    {renderListView(activeColorList)}
                </div>
                <button 
                    onClick={() => closeModel()} className="ListModel__btn"
                >
                     X
                </button>
            </div>
        </div>
    );
}

export default ListModel;