import React from 'react';
import './ListItem.css';
import store from '../store';
import { activeColorList } from '../actions';

const ListItem = ({colorList}) => {
  
    
    const bg = {
        backgroundImage: `linear-gradient(-${colorList.colorDegree}deg, ${colorList.color[0]}, ${colorList.color[1]})`
    }
    
    const onActiveColorList = () => {
        store.dispatch(activeColorList(colorList));
    }
    
    return(
        <div className="ListItem" onClick={() => onActiveColorList(colorList)}>
            <div className="ListItem__left">
               <div className="ListItem__date">
                   <span className="ListItem__date--month">{colorList.date.month}</span>
                   <span className="ListItem__date--day">{colorList.date.day}</span>
               </div>
                
                <p className="ListItem__date--year">{colorList.date.year}</p>
            </div>
            <div className="ListItem__right" style={bg}>
                {colorList.color}
            </div>
        </div>
    );
}

export default ListItem;