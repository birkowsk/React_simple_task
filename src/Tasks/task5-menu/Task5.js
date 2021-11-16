import React, { useState, useCallback } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const initialState = {
  menu: items,
  categories: allCategories
}

const useFilterFood = () => {
  const [state, setter] = useState(initialState)

  const filterFood = useCallback(
    (category) => {
      if (category === 'all') {
        setter({ ...state, menu: items });
        return;
      }
      const filteredFood = items.filter((meal) => {
        return meal.category === category;
      });
      setter({ ...state, menu: filteredFood });
    },
    [],
    // PYTANIE
    // jak mamy pustą tablicę zależności to do czego ta tablica odnosi
  )
  return { filterFood, state }
}

function Task5() {

  const { filterFood, state } = useFilterFood()
  const { menu, categories } = state

  return (
    <div className="section">
      <Categories filterFood={filterFood} categories={categories} />
      <Menu menu={menu} />
    </div>
  );
}

export default Task5;
