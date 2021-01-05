import React, { useContext, useRef } from "react";
import styles from "./style.module.css";
import { FavoritContext } from "../../context/context";

const Random = ({ children }) => {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = children;
  const heartRef = useRef();
  const { favorit, setFavorit } = useContext(FavoritContext);
  const handleOnClick = () => {
    const id = heartRef.current.id;
    setFavorit(items => {
      if (items[id]) {
        const newItems = { ...items };
        delete newItems[id];
        return newItems;
      } else {
        const newItems = {
          ...items,
          [id]: { idMeal, strMeal, strCategory, strArea, strMealThumb }
        };
        return newItems;
      }
    });
  };

  return (
    <li className={styles.li}>
      <div className={styles.div}>
        <img className={styles.img} src={strMealThumb} alt="meal" />
        <div className={styles.container}>
          <div className={styles.info}>
            <p className={styles.title}>{strMeal}</p>
            <span className={styles.category}>{strCategory},</span>
            <span className={styles.area}>{strArea}</span>
          </div>
          <span
            ref={heartRef}
            id={idMeal}
            className={`${styles.heart} ${favorit[idMeal] && styles.check}`}
            onClick={handleOnClick}
          >
            <i className="fas fa-heart"></i>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Random;
