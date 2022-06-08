import React from 'react'
import {useGlobalContext} from './Context' ;


function Submenu() {
    const {isSubmenuopen} = useGlobalContext();
  return (
    <aside className={`${isSubmenuopen? 'submenu show' : 'submenu'}`}>
        ssss
    </aside>
  )
}

export default Submenu