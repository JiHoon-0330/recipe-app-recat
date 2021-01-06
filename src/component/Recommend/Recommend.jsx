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
    <>
      <p className={styles.p}>Recommend Recipe</p>
      {!loading && (
        <section className={styles.section}>
          <ul className={styles.recipe}>
            {recipe.map((item, index) => (
              <Recipe key={index} recipe={item} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Recommend;
