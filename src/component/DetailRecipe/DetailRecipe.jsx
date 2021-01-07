import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import styles from "./style.module.css";

const DetailRecipe = ({ recipe }) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube
  } = recipe;
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const youtubeId = strYoutube && strYoutube.match(regExp)[7];
  const { favorit, checkFavorit } = useContext(Context);

  const [checked, setChecked] = useState({});
  const getIngredientMeasure = () => {
    let cnt = 1;
    let tag = ``;
    while (cnt <= 20) {
      if (!recipe[`strIngredient${cnt}`]) {
        break;
      } else {
        tag += `<li ${checked[cnt] === true ? `class="check"` : ""}
        ><span class="pointer" data-id=${cnt}>${`${cnt}. ${
          recipe[`strIngredient${cnt}`]
        }`}: ${recipe[`strMeasure${cnt}`]}</span></li>`;
      }
      cnt++;
    }
    return tag;
  };

  const onClickLike = () => {
    checkFavorit(recipe);
  };

  const onClick = event => {
    const id = event.target.dataset.id;
    console.log(id);
    setChecked(items => {
      if (items[id]) {
        const newItems = { ...items };
        delete newItems[id];
        return newItems;
      } else {
        const newItems = { ...items, [id]: true };
        return newItems;
      }
    });
  };
  return (
    <section className={styles.section}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={strMealThumb} alt="meal" />
        <div className={styles.infoDiv}>
          <div className={styles.divInfo}>
            <p className={styles.title}>{strMeal}</p>
            <p className={styles.info}>Category: {strCategory}</p>
            <p className={styles.info}>Area: {strArea}</p>
            <p className={styles.info}>Tags: {strTags}</p>
            <p className={styles.info}>
              Like:{" "}
              <span
                className={`${styles.heart} ${favorit[idMeal] && styles.check}`}
                onClick={onClickLike}
              >
                <i className="fas fa-heart"></i>
              </span>
            </p>
          </div>
          <div className={styles.divIngredients}>
            <p className={styles.title}>Necessary ingredients</p>
            <ul
              className={styles.ul}
              onClick={onClick}
              dangerouslySetInnerHTML={{ __html: getIngredientMeasure() }}
            ></ul>
          </div>
        </div>
      </div>
      <div className={styles.instructionsDiv}>
        <p className={styles.title}>Instructions</p>
        <pre className={styles.pre}>{strInstructions}</pre>
      </div>
      {youtubeId && (
        <div className={styles.youtube}>
          <iframe
            width="1200px"
            height="675px"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default DetailRecipe;
