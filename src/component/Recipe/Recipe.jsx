import React, { useContext, useRef } from "react";
import styles from "./style.module.css";
import { FavoritContext } from "../../context/context";
import { Link } from "react-router-dom";

const Random = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe;
  const { favorit, checkFavorit } = useContext(FavoritContext);
  const onClickLike = () => {
    checkFavorit(recipe);
  };

  return (
    <li className={styles.li}>
      <div className={styles.div}>
        <Link to={`/recipe/${idMeal}`}>
          <img className={styles.img} src={strMealThumb} alt="meal" />
        </Link>
        <div className={styles.container}>
          <div className={styles.info}>
            <p className={styles.title}>{strMeal}</p>
            {strCategory && (
              <span className={styles.category}>{strCategory},</span>
            )}
            {strArea && <span className={styles.area}>{strArea}</span>}
          </div>
          <span
            className={`${styles.heart} ${favorit[idMeal] && styles.check}`}
            onClick={onClickLike}
          >
            <i className="fas fa-heart"></i>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Random;
