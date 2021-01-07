import React, { useState } from "react";

export const Context = React.createContext();

const ContextFrovider = ({ children }) => {
  const [favorit, setFavorit] = useState({});

  const checkFavorit = recipe => {
    setFavorit(items => {
      const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe;
      if (items[idMeal]) {
        const newItems = { ...items };
        delete newItems[idMeal];
        return newItems;
      } else {
        const newItems = {
          ...items,
          [idMeal]: { idMeal, strMeal, strCategory, strArea, strMealThumb }
        };
        return newItems;
      }
    });
  };
  return (
    <Context.Provider value={{ favorit, checkFavorit }}>
      {children}
    </Context.Provider>
  );
};

export default ContextFrovider;
