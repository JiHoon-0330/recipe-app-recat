import React, { useContext } from "react";
import { FavoritContext } from "../../context/context";
import RandomRecipe from "../Recipe/Recipe";
import styles from "./style.module.css";

const Favorit = props => {
  const { favorit, setFavorit } = useContext(FavoritContext);
  const items = Object.keys(favorit);
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>나의 레시피</h2>
      {items.length !== 0 && (
        <ul className={styles.ul}>
          {items.map(item => (
            <RandomRecipe key={item} recipe={favorit[item]} />
          ))}
        </ul>
      )}
      {items.length === 0 && (
        <div className={styles.container}>
          <p>좋아하는 레시피를 추가해보세요!</p>
        </div>
      )}
    </section>
  );
};

export default Favorit;
