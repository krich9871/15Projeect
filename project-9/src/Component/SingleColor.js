import React, {useState} from 'react'
import rgbToHex from './utils';


function SingleColor({rgb, weight, index ,hexcolor}) {
    const [alert, Setalert] = useState();
    const bcg = rgb.join(',');
    // way two to get hexcolour 
    const hex = rgbToHex(...rgb);
  return (
    <article  className={`color ${index > 10 && 'colour-light'}`}  style={{ backgroundColor: `rgb(${bcg})` }}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexcolor}</p>
    </article>
  );
}

export default SingleColor