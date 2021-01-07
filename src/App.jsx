import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Random from "./component/Random/Random";
import styles from "./app.module.css";
import Detail from "./component/Detail/Detail";
import Search from "./component/Search/Search";

const App = ({ recipeApi }) => {
  return (
    <section className={styles.app}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Random recipeApi={recipeApi} />
          </Route>
          <Route path="/recipe/:id">
            <Detail recipeApi={recipeApi} />
          </Route>
          <Route path="/search/:keyword">
            <Search recipeApi={recipeApi} />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </section>
  );
};

export default App;
