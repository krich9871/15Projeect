/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react'
import { links, social } from './data'
import logo from './logo.svg'
import { FiAlignJustify, FiTwitter } from "react-icons/fi";
function Navbar() {
    const [showLinks, Setshowlinks] = useState(false);
    const linkContainerRef = useRef(null) ;
    const linkRef = useRef(null) ;

    useEffect(()=>{
          const linksheight = linkRef.current.getBoundingClientRect().height ;
        if(showLinks){
            linkContainerRef.current.style.height =`${linksheight}px`;
        }else{
            linkContainerRef.current.style.height = '0px';
        }
    }, [showLinks]) ;
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt="logo" />
                    <button className='nav-toggle' onClick={() => {
                        Setshowlinks(!showLinks);
                    }}>
                        <FiAlignJustify />
                    </button>
                </div>
            
                    <div className='links-container 'ref={linkContainerRef} >
                        <ul className='links' ref={linkRef}>
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            })}

                        </ul>
                    </div>
                

                <div className='social-icons'>

                    {social.map((socials) => {
                        const { id, url, icon } = socials;
                        return <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    })}

                </div>

            </div>
        </nav>
    )
}

export default Navbar