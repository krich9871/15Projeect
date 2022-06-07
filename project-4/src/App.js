import React, { useState } from 'react';
import Info_Question from './Component/Info_Question';
import data_question from './data/data';


function App() {
  const [question, Setquestion] = useState(data_question);
  return (
    <>
      <div className=' container'>
        <h2>Questions and answers</h2>
        <section className='info'>
           {question.map((quest)=>{
             // eslint-disable-next-line react/jsx-pascal-case
             return <Info_Question key={quest.id} {
               ...quest
             }/>;
           }

           )}
               
          </section> 
      </div>
    </>
  );
}

export default App;
