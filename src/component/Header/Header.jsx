import React, { memo, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./style.module.css";

const Header = memo(() => {
  const inputRef = useRef();
  const history = useHistory();
  const onSubmit = event => {
    event.preventDefault();
    if (inputRef.current.value) {
      inputRef.current.value &&
        history.push(`/search/${inputRef.current.value}`);
      inputRef.current.value = "";
    }
  };

  return (
    <header>
      <Link to="/">
        <h1 className={styles.title}>RecipeApp</h1>
      </Link>
      <div className={styles.div}>
        <form onSubmit={onSubmit}>
          <input ref={inputRef} className={styles.input} type="text" />
          <button className={styles.button}>
            <span className={styles.icon}>
              <i className="fas fa-search"></i>
            </span>
          </button>
        </form>
      </div>
    </header>
  );
});

export default Header;
