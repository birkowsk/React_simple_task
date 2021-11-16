import React, { useMemo, memo } from 'react';
import '../index.css';

const Article = ({ tour, removeTour }) => {
  return (
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
};

const MemoizedArticle = (props) => useMemo(() => <Article {...props} />, [props.tour]);

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="main-container">
      {tours.map((tour, id) => (
        <MemoizedArticle key={id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default memo(Tours);
