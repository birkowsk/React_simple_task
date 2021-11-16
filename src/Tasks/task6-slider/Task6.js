import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Slider from './Slider';
import data from './data';
import './index.css';
import { useSliderLogic } from './useSlider.hook';

const initialState = {
  people: data,
  index: 0,
};

function Task6() {
  const [state, setter] = useState(initialState);
  const stateHook = { state, setter };
  const { setNextPerson, setPrevPerson } = useSliderLogic(stateHook);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <Slider stateHook={stateHook} />
        <button className="prev" onClick={() => setPrevPerson()}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setNextPerson()}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Task6;
