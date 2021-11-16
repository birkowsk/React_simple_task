import React, { useState, memo, useStateContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import useToggler from './useQuestion.hook';

const Question = ({ id, title, info }) => {

  const { toggle, toggler } = useToggler()

  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button onClick={toggler}>{toggle ? '-' : '+'}</button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default memo(Question);
