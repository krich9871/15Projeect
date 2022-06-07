import React from 'react'

function Categories({ categories,filteritems }) {
    return (
        <div className='btn-container'>
           {
            /* Not work if youhave more category
            <button className='filter-btn' onClick={ () => filteritems('all')}> All</button>
            <button className='filter-btn' onClick={ () => filteritems('breakfast')}> Breakfast</button>
            <button className='filter-btn' onClick={ () => filteritems('shakes')}> Shakes</button>
             <button className='filter-btn' onClick={ () => filteritems('lunch')}> Lunch</button>*/}
            
            {categories.map((category, index)=>{
                return<button type='button' className='filter-btn' key={index} onClick={()=> filteritems(category)} >
                     {category}
                </button>
            
            })}
        </div>
    )
}

export default Categories