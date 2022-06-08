import React from 'react'
import { FaTimes } from "react-icons/fa";
import logo from './logo.svg';
import { social, links } from '../data/data';
import { useGlobalContext } from './Context'
function Sidebar() {
  const { SidebarOPen, closesidebar } = useGlobalContext();
  return (
    <aside className={` ${SidebarOPen ? 'sidebar show-sidebar ' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className="logo" alt=" coding addict" />
        <button className='close-btn' onClick={closesidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return <li key={id} >
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        })}

      </ul>
      <ul className='social-icons'>
        {social.map((socials) => {
          const { id, url, icon } = socials;
          return <li key={id} >
            <a href={url}>
              {icon}
            </a>
          </li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar