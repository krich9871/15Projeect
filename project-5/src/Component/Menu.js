import React from 'react'

function Menu({ item_data }) {
    return (
        <div className='section-center'>{item_data.map((menu) => {
            const { id, title, img, desc , price } = menu;
            return (
            <article key={id} className="menu-item">
               <img src={img} alt={title} className="photo"/>
               <div className='item-info'>
                   <header>
                       <h4>{title}</h4>
                       <p className='price'> {price}</p>
                   </header>
                   <p className='item-text' >{desc}</p>
               </div>
            </article>
            );

        })}</div>
    )
}

export default Menu