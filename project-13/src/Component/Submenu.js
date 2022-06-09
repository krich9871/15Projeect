import React,{useEffect,useRef, useState} from 'react'
import {useGlobalContext} from './Context' ;


function Submenu() {
    const {isSubmenuopen,location,page:{page,links}} = useGlobalContext();
    const container = useRef(null);
    const [columns, Setcolumns] = useState('col-2');
    useEffect(()=>{
      Setcolumns('col-2');
        const submenu = container.current;
        const {center,bottom} = location ;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;

        if(links.length ===3){
          Setcolumns('col-3') ;
        }else if(links.length>3){
          Setcolumns('col-4');
        }
    },[location])

  return (
    <aside className={`${isSubmenuopen? 'submenu show' : 'submenu'}`} ref={container}>
       <h4>{page}</h4>
       <div className={`submenu-center ${columns}`}>
         {links.map((link,index)=>{
           const {label,icon,url} = link ;
           return <a key={index} href={url}>
             {icon}
             {label}
           </a>
         })}
       </div>
    </aside>
  )
}

export default Submenu