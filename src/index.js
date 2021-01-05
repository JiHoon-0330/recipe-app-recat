import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import RecipeApi from "./service/RecipeApi";
import FavoritContextFrovider from "./context/context";

const recipeApi = new RecipeApi();

ReactDOM.render(
  <React.StrictMode>
    <FavoritContextFrovider>
      <App recipeApi={recipeApi} />
    </FavoritContextFrovider>
  </React.StrictMode>,
  document.getElementById("root")
);
