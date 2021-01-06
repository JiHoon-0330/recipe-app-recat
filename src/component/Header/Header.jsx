import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = memo(() => (
  <header>
    <Link to="/">
      <h1 className={styles.title}>RecipeApp</h1>
    </Link>
    <input className={styles.input} type="text" />
    <span className={styles.icon}>
      <i className="fas fa-search"></i>
    </span>
  </header>
));

export default Header;
