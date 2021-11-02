import React, { useState } from 'react';

export const ToursContext = React.createContext({});

const initialState = {
  loading: true,
  tours: [],
  toDelete: false,
};

export const useStateContext = () => React.useContext(ToursContext);

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const values = { state, setState };

  return <ToursContext.Provider value={values}>{children}</ToursContext.Provider>;
};
