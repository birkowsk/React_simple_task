import React, { useState, useEffect, memo, useCallback } from 'react';
import { useStateContext } from '../ReviewContext';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import useReviewLogic from './useReviewLogic.hook'
import '../index.css';

const Review = () => {
  const { nextPerson, prevPerson, getRandomPerson, person } = useReviewLogic();
  const { image, name, job, text } = person
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt="123" />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => nextPerson()} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => getRandomPerson()}>
        Suprise me
      </button>
    </article>
  );
};

export default memo(Review);
