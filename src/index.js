import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import RecipeApi from "./service/RecipeApi";
import ContextFrovider from "./context/context";

const recipeApi = new RecipeApi();

ReactDOM.render(
  <React.StrictMode>
    <ContextFrovider>
      <App recipeApi={recipeApi} />
    </ContextFrovider>
  </React.StrictMode>,
  document.getElementById("root")
);
