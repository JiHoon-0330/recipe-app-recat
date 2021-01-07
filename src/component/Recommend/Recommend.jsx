import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import styles from "./style.module.css";

const Recommend = ({ recipeApi, strCategory }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    recipeApi.getCategory(strCategory).then(data => {
      if (!data) {
        return;
      } else {
        setRecipe(data);
      }
      setLoading(false);
    });
  }, [recipeApi, strCategory]);
  return (
    <div>
      <p className={styles.p}>추천 레시피</p>
      {!loading && (
        <section className={styles.section}>
          <ul className={styles.recipe}>
            {recipe.map((item, index) => (
              <Recipe key={index} recipe={item} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Recommend;
