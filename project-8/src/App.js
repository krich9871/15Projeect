import React, { useState } from 'react';
import './App.css';
import data from './data/data'


function App() {
  const [count, setCount] = useState(0);
  const [text, Settext] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    console.log(amount);
    if(count<=0){
      amount = 1 ;
    }else if(count > 8){
      amount = 8 ;
    }
   Settext(data.slice(0,amount));
  }
  return (
    <section className='section-enter'>
      <h3>
        Help you should
      </h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amout'>
          Paragraphs :
        </label>
        <input type="number" name="amout" id="amout" 
          value={count} onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;


