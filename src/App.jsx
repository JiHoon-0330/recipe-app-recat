import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Random from "./component/Random/Random";
import styles from "./app.module.css";
import Favorit from "./component/Favorit/Favorit";

const App = ({ recipeApi }) => {
  return (
    <section className={styles.app}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Favorit />
            <Random recipeApi={recipeApi} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </section>
  );
};

export default App;
