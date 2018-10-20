import React from 'react';
import './ListView.css';
import { prefixConstants } from '../static-data';

const ListView = ({colorList}) => {
    const bgColor = {
        backgroundImage: `linear-gradient(-${colorList.colorDegree}deg, ${colorList.color[0]}, ${colorList.color[1]})`
    }

    return (
        <div className="ListView">
           <div style={bgColor} className="ListView__top">
               <p style={{fontSize: "50px"}}>{colorList.typing}</p>
           </div>
           <div>
              {prefixConstants.map( p => <p style={{fontSize: "10px", marginBottom: "2px"}}>background-image:  {p}linear-gradient(-{colorList.colorDegree}deg, {colorList.color[0]}, {colorList.color[1]})</p>)}
             
               <p style={{fontSize: "10px"}}>filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='{colorList.color[0]}', endColorstr='{colorList.color[1]}',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */</p>
     
           </div>
        </div>
    );
  
}

export default ListView;