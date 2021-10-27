import React, { useState, useEffect, memo } from 'react';
import peopleArr from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './index.css';

const initialState = {
  person: {},
  actualIndex: 0,
  peopleArr: peopleArr
};

// zapytać o useCallback ponieważ w tym przypadku nie ma to sensu (?)

const useReviewLogic = () => {
  const [state, setter] = useState(initialState);
  let { person, actualIndex, peopleArr } = state;

  useEffect(() => {
    person = peopleArr[0]

    setter({ ...state, person });
  }, []);

  const nextPerson = () => {
    const isLastPerson = actualIndex === peopleArr.length - 1
    const firstPerson = peopleArr[0]
    const nextPerson = peopleArr[actualIndex + 1]

    setter({ ...state, person: isLastPerson ? firstPerson : nextPerson });

    // if (actualIndex === peopleArr.length - 1) {
    //   person = peopleArr[0];
    // }
    // else{
    //   person =peopleArr[actualIndex + 1];
    // }

    // setter({...state, person});

  };

  const prevPerson = (ev) => {



    if (actualIndex === 0) {
      const lastPeople = peopleArr[peopleArr.length - 1];
      setter({ person: lastPeople });
    } else {
      let prevPerson = peopleArr[actualIndex - 1];
      setter({ ...state, person: prevPerson });
    }
  }

  const getRandomPerson = () => {

    console.log('getRandom');
    const getRandomIndex = () => Math.floor(Math.random() * (peopleArr.length - 1));
    const randomIndex = getRandomIndex();
    const randomPerson = peopleArr[randomIndex];
    if (actualIndex === randomIndex) {
      getRandomPerson();
    } else {
      setter({ person: randomPerson, actualIndex: randomIndex });
    }
  };

  return { nextPerson, prevPerson, getRandomPerson, person };
};

const Review = () => {
  const { nextPerson, prevPerson, getRandomPerson, person } = useReviewLogic();
  const { image, name, job, text } = person
  console.log('Review');
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
