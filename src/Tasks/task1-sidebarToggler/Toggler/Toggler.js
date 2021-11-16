import { React, useContext } from 'react';
import { AppContext } from '../Task1';


const useSidebarLogic = () => {
  const { actions, state } = useContext(AppContext);
  return {
    actions, state
  }
}

const Toggler = () => {
  const { actions, state } = useSidebarLogic();
  return (
    <button
      className="buttonToggler"
      onClick={() => {
        actions.setSidebarState(!state.isSidebarOpen);
      }}
    >
      {state.isSidebarOpen ? 'close' : 'open'}
    </button>
  );
};

export default Toggler;
