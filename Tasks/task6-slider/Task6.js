import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Slider from './Slider';
import data from './data';
import './index.css';

const initialState = {
  people: data,
  index: 0,
}

function Task6() {

  const [state, setter] = useState(initialState)

  const stateHook = { state, setter }


  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <Slider initialState={state} stateHook={stateHook} />
        <button className="prev" onClick={() => setter({ ...state, index: state.index - 1 })}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setter({ ...state, index: state.index + 1 })}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Task6;
