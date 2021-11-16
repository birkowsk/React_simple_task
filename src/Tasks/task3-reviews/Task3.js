import React from 'react';
import Review from './components/Review';
import { StateProvider } from './ReviewContext';

function Task3() {
  return (
    <div className="review-wrapper">
      <StateProvider>
        <Review />
      </StateProvider>

    </div>
  );
}

export default Task3;
