import React from 'react';
import './ListView.css';
import store from '../store';
import { deleteDesign } from '../actions';

const ListView = ({colorList}) => {
    const bgColor = {
        backgroundImage: `linear-gradient(-${colorList.colorDegree}deg, ${colorList.color[0]}, ${colorList.color[1]})`
    }
    
    const onDeleteDesign = id => {
        store.dispatch(deleteDesign(id))
        console.log(id);
    }
    
    return (
        <div className="ListView">
           <div style={bgColor} className="ListView__top">
               <p style={{fontSize: "50px"}}>{colorList.typing}</p>
           </div>
           <div>
               <p style={{fontSize: "10px"}}>backgroundImage: linear-gradient(-{colorList.colorDegree}deg, {colorList.color[0]}, {colorList.color[1]})</p>
               <p style={{fontSize: "10px"}}>backgroundImage: -o-linear-gradient(-{colorList.colorDegree}deg, {colorList.color[0]}, {colorList.color[1]})</p>
               <p style={{fontSize: "10px"}}>backgroundImage: -ms-linear-gradient(-{colorList.colorDegree}deg, {colorList.color[0]}, {colorList.color[1]})</p>
               <p style={{fontSize: "10px"}}>backgroundImage: -moz-linear-gradient(-{colorList.colorDegree}deg, {colorList.color[0]}, {colorList.color[1]})</p>
               <p style={{fontSize: "10px"}}>backgroundImage: -webkit-linear-gradient(-{colorList.colorDegree}deg, {colorList.color[0]}, {colorList.color[1]})</p>
               <p style={{fontSize: "10px"}}>filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='{colorList.color[0]}', endColorstr='{colorList.color[1]}',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */</p>
     
           </div>
        </div>
    );
  
}

export default ListView;