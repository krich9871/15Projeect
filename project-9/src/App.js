import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './Component/SingleColor';


function App() {
  const [color, Setcolor] = useState('');
  const [error, Seterror] = useState(false);
  const [list, Setlist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let Clours = new Values(color).all(10)
      Setlist(Clours);
    } catch (error) {
      Seterror(true);
      console.log('error');
    }


  }
  return (

    <>
      <section className='container'>
        <h3>color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => Setcolor(e.target.value)} placeholder='#f15025' className={`${error ? 'error' : null}`} />

          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((colour, index) => {
         
          return (<SingleColor key={index} {...colour} index={index}  hexcolor={colour.hex}/>);
        })}
      </section>
    </>
  );
}

export default App;
