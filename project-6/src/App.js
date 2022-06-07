import React, { useState, useEffect } from 'react';
import { FaChevronCircleRight } from "react-icons/fa";
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [Loading, SetLoading] = useState(true);
  const [jobs, Setjobs] = useState([]);
  const [value, Setvalue] = useState(0);

  const fetchjobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    Setjobs(newjobs);
    SetLoading(false);
  }
  // fetchjob one time
  useEffect(() => {
    fetchjobs();
  }, [])

  if (Loading) {
    return <section className='section loading'>
      <h2>wait for Loading</h2>
    </section>
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>Expiernce</h2>
        <div className='underline'></div>

      </div>
      <div className='jobs-center'>

        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
            <button key={item.id} onClick={() => Setvalue(index)} className={`job-btn ${index ===value &&'active-btn' } `}>
              {item.company}
            </button>
            );
          })
          }
        </div>

        <article className='job-info'>
          <h2>{title}</h2>
          <h3>{company}</h3>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return <div key={index} className="job-desc">
              <FaChevronCircleRight className='job-icon' />
              <p>{duty} </p>
            </div>
          })}

        </article>
      </div>
    </section>
  );
}

export default App;
