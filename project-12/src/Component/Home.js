import React  from 'react'
import { FiAlignJustify} from "react-icons/fi";
import {useGlobalContext} from './Context'
function Home() {
  const {opensidebar,openModal} = useGlobalContext() ;
  return (
    <main>
   
      <button className='sidebar-toggle' onClick={opensidebar}>
          <FiAlignJustify/>
      </button>
      <button className='btn' onClick={openModal} >show! modal</button>
    </main>
  );
}

export default Home