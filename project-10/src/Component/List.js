import React from 'react'
import { RiEditBoxFill, RiDeleteBinFill } from "react-icons/ri";

function List({items, removeitem , edititem}){
  return (
    <div className='grocery-list'>
      {items.map((item)=>{
        const { id,title} = item ;
        return ( 
        <article key={id} className="grocery-item">
          <p className='title'>{title}</p>
          <div className='btn-container'>
            <button type='button' className='edit-btn' onClick={() => edititem(id)}>
              <RiEditBoxFill/>
            </button>
            <button type='button' className='delete-btn' onClick={() => removeitem(id)}>
              <RiDeleteBinFill/>
            </button>
          </div>
        </article>
        );
      })}
      
    </div>
  );
}

export default List
