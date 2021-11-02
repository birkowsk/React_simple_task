import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useStateContext } from './ToursContext';
import Loading from './components/Loading';
import Tours from './components/Tours';
import data from './static/data';
import './index.css';

const getTours = new Promise((res) => {
  setTimeout(() => {
    res(data);
  }, 200);
});

const useToursLogicProvider = () => {
  const context = useStateContext();
  // tutaj zmiana na samo useStateContext()//

  const { state, setState } = context;
  // najpierw desktrukturyzacja contextu
  const { loading, tours, tourToDelete, txt } = state;
  // dopiero potem możemy zdestrukturyzować state

  const fetchObjects = () => {
    getTours.then((data) => {
      setState({ ...context, loading: false, tours: data });
    });
  };

  const removeTour = useCallback(
    ({ id }) => {
      const newTour = tours.filter((tour) => tour.id !== id);
      setState({ ...context, loading: false, tours: newTour, tourToDelete: true });
    },
    [tours],
  );

  useEffect(() => {
    fetchObjects();
  }, []);

  return { fetchObjects, removeTour, loading, tours, tourToDelete, txt };
};

function Task2() {
  const { fetchObjects, removeTour, loading, tours, tourToDelete, txt } = useToursLogicProvider();
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <h1>No Tours Left</h1>
        <button onClick={() => fetchObjects()}>Od nowa</button>
      </>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} tourToDelete={tourToDelete} />
    </>
  );
}

export default Task2;
