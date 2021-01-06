import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const DetailRecipe = ({ recipe }) => {
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
    <>
      <p className={styles.p}>Necessary ingredients</p>
      <ul
        className={styles.ul}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: getIngredientMeasure() }}
      ></ul>
    </>
  );
};

export default DetailRecipe;
