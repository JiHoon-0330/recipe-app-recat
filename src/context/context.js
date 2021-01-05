import React, { useState } from "react";

export const FavoritContext = React.createContext();

const FavoritContextFrovider = ({ children }) => {
  const [favorit, setFavorit] = useState({});
  return (
    <FavoritContext.Provider value={{ favorit, setFavorit }}>
      {children}
    </FavoritContext.Provider>
  );
};

export default FavoritContextFrovider;
