import React, { useMemo, memo } from 'react';
import '../index.css';

const Article = ({ tour, removeTour }) => (
  <article key={tour.id} className="single-tour">
    <img src={tour.image} alt="img" />
    <div className="flex-wrapper">
      <h2>{tour.name}</h2>
      <h3>{tour.price}$</h3>
    </div>
    <p>{tour.info}</p>
    <button onClick={() => removeTour(tour)}>Not Inerested</button>
  </article>
);

const MemoizedArticle = (props) => useMemo(() => <Article {...props} />, [props.tour]);

const Tours = ({ tours, removeTour, tourToDelete }) => {
  return (
    <div className="main-container">
      {tours.map((tour) => (
        <MemoizedArticle tour={tour} />
      ))}
    </div>
  );
};

export default memo(Tours);
