import React from 'react'
import { FiGift } from "react-icons/fi";
import { useGlobalContext} from './Context'

function Model() {
  const {isModalopen,closeModal} = useGlobalContext() ;
  return (
    <div className={`${isModalopen? 'modal-overlay show-modal' :'modal-overlay ' }`}>
     <div className='modal-container'>
       <h3>Modal Context</h3>
       <button className='close-modal-btn' onClick={closeModal}>
        <FiGift/>
       </button>
     </div>
    </div>
  );
}

export default Model