import React from 'react';
import './ListItem.css';
import store from '../store';
import { activeColorList, deleteDesign } from '../actions';

const ListItem = ({colorList, isActive}) => {
    
    const bg = {
        backgroundImage: `linear-gradient(-${colorList.colorDegree}deg, ${colorList.color[0]}, ${colorList.color[1]})`
    }
    
    const onActiveColorList = () => {
        store.dispatch(activeColorList(colorList, colorList.id));
    }
    
    const onDeleteDesign = id => {
        store.dispatch(deleteDesign(id))
        console.log(id);
    }
    
    return(
        <div className={isActive ? "ListItem ListItem__active" : "ListItem"} onClick={() => onActiveColorList(colorList, colorList.id)}>
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
            <button onClick={() => onDeleteDesign(colorList.id)} className="ListItem__deleteBtn">Delete</button>
        </div>
    );
}

export default ListItem;