import React from 'react';
import './ListView.css';
import { prefixConstants } from '../static-data';

const ListView = ({ colorList }) => {
    const bgColor = {
        backgroundImage: `linear-gradient(-${colorList.colorDegree}deg, ${colorList.color[0]}, ${colorList.color[1]})`
    }

    const fontStyle = {
        fontSize: `${colorList.fontSize}px`,
        fontFamily: `${colorList.fontFamily}`,
        color: `${colorList.fontColor}`
    }
    
    return (
        <div className="ListView">
          
           <div style={bgColor} className="ListView__top">
               <p style={fontStyle}>
                   {colorList.typing}
               </p>
           </div>
           
           <div className="ListView__bottom">
             <div>
                 <p className="ListView__info--title">
                     Background Code:
                 </p>
                 
                 {prefixConstants.map( p => 
                     <p key={p} className="ListView__info--content">
                        background-image: {p}linear-gradient(-{colorList.colorDegree}deg, {colorList.color[0]}, {colorList.color[1]})
                     </p>
                 )}
             
                 <p className="ListView__info--content  mb-2">
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='{colorList.color[0]}', endColorstr='{colorList.color[1]}',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
                 </p>
             </div>
             <div>
                 <p className="ListView__info--title">
                    Font Code:
                 </p>
                 <p className="ListView__info--content">
                    font-size: {colorList.fontSize}
                 </p>
                 <p className="ListView__info--content">        font-family: {colorList.fontFamily}
                 </p>
                 <p className="ListView__info--content">
                    color: {colorList.fontColor}
                 </p>
             </div> 
                            
           </div>
           
        </div>
    );
  
}

export default ListView;