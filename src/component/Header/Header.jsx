import React, { memo } from "react";
import styles from "./style.module.css";

const Header = memo(() => (
  <header>
    <h1 className={styles.title}>RecipeApp</h1>
    <input className={styles.input} type="text" />
    <span className={styles.icon}>
      <i className="fas fa-search"></i>
    </span>
  </header>
));

export default Header;
