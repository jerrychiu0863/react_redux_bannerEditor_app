import React from 'react';
import './ListItem.css';

const ListItem = ({colorList}) => {
    return(
        <div className="ListItem">
            <div>
                <p>{colorList.date.month}</p>
                <p>{colorList.date.day}</p>
                <p>{colorList.date.year}</p>
            </div>
            <div>
                {colorList.color}
            </div>
        </div>
    );
}

export default ListItem;