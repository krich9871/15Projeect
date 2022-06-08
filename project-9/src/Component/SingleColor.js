import React, {useState} from 'react'
import rgbToHex from './utils';


function SingleColor({rgb, weight, index ,hexcolor}) {
    // eslint-disable-next-line no-unused-vars
    const [alert, Setalert] = useState();
    const bcg = rgb.join(',');
    // way two to get hexcolour 
    // eslint-disable-next-line no-unused-vars
    const hex = rgbToHex(...rgb);
  return (
    <article  className={`color ${index > 10 && 'colour-light'}`}  style={{ backgroundColor: `rgb(${bcg})` }}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexcolor}</p>
    </article>
  );
}

export default SingleColor