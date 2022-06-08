import React from 'react'
import { useGlobalContext } from './Context';
import { BsMenuUp } from "react-icons/bs";
import data from '../data/data' ;
function Sidebar() {
    const {isSidebaropen,closeSidebar} = useGlobalContext();
  return (
    <aside className={`${isSidebaropen? 'side-wrapper show' : 'sidebar-wrapper' }`}>
        <div className='sidebar'>
            <button className='close-btn' onClick={closeSidebar}>
                 <BsMenuUp/>
            </button>
            <div className='sidebar-links'>
                {data.map((item,index) =>{
                    const {links,page} = item ;
                    return ( <article key={index}>
                        <h4>{page}</h4>
                        <div className='sidebar-sublinks'>
                            {links.map((link,index)=>{
                                const {url,icon,label} = link ;
                                return (
                                    <a key={index} href={url}>
                                        {icon}
                                        {label}
                                    </a>
                                );
                            })}
                        </div>
                    </article>);
                })}
            </div>
        </div>
    </aside>
  )
}

export default Sidebar