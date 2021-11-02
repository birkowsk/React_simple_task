import React, { useState } from 'react';
import peopleArr from './static/data'

export const ReviewContext = React.createContext({});

const initialState = {
    person: {},
    actualIndex: 0,
    peopleArr: peopleArr
};

export const useStateContext = () => React.useContext(ReviewContext);

export const StateProvider = ({ children }) => {
    const [state, setter] = useState(initialState);

    const values = { state, setter };

    return <ReviewContext.Provider value={values}>{children}</ReviewContext.Provider>;
};

