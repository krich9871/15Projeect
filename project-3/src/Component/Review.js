import React, { useState } from 'react'
import data from '../data/data';
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronRight } from "react-icons/fa";

function Review() {
  const [index, Setindex] = useState(0);
  //set index 
  const { name, job, image, text } = data[index];
  //next person
  const nextperson = () => {
    Setindex((inx) => {
      let newinx = inx + 1;

      return checkperson(newinx);
    })
  }

  // perv person
  const prevperson = () => {
    Setindex((inx) => {
      let newinx = inx - 1;

      return checkperson(newinx);
    })
  }

  // random person 
  const random = () => {

    let randomNumber = Math.floor(Math.random() * data.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    Setindex(checkperson(randomNumber));

  }

  const checkperson = (number) => {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    }
    return number;
  }
  return (
    <article className='review '>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaChevronCircleRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h5 className='job'>{job}</h5>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevperson}>
          <FaChevronCircleLeft />
        </button>
        <button className='next-btn' onClick={nextperson}>
          <FaChevronRight />
        </button>

      </div>
      <button className='rabdom-btn' onClick={random}>
        Random me

      </button>

    </article>
  )
}

export default Review