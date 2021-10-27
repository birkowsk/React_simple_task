import React, { useState, memo } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const useToggler = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    setToggle(!toggle)
  };

  return { toggle, toggler }
}


const Question = ({ id, title, info, someFunc }) => {

  const { toggle, toggler } = useToggler()
  console.log('question')
  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button onClick={() => toggler()}>{toggle ? '-' : '+'}</button>
        <button onClick={() => someFunc()}>Change state</button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default memo(Question);
