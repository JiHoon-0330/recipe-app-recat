import React, { useContext, useRef } from "react";
import styles from "./style.module.css";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

const Random = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe;
  const { favorit, checkFavorit } = useContext(Context);
  const onClickLike = () => {
    checkFavorit(recipe);
  };
  const onClickImg = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  };
  return (
    <li className={styles.li}>
      <div className={styles.div}>
        <Link to={`/recipe/${idMeal}`}>
          <img
            className={styles.img}
            src={strMealThumb}
            alt="meal"
            onClick={onClickImg}
          />
        </Link>
        <div className={styles.container}>
          <div className={styles.info}>
            <p className={styles.title}>{strMeal}</p>
            {strCategory && strArea && (
              <span
                className={styles.category}
              >{`${strCategory}, ${strArea}`}</span>
            )}
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
