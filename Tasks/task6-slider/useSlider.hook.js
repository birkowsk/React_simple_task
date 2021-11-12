export const useSliderLogic = ({ state, setter }) => {
  const setNextPerson = () => {
    setter({ ...state, index: state.index + 1 });
  };

  const setPrevPerson = () => {
    setter({ ...state, index: state.index - 1 });
  };

  return { state, setter, setNextPerson, setPrevPerson };
};
