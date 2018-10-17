import React from 'react';
import './ListView.css';

const ListView = ({activeList}) => {
    return (
        <div className="ListView">
            {activeList !== null ? <p>{activeList.id}</p> : <p>123</p>}
        </div>
    )
  
}

export default ListView;