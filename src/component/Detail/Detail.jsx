import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailRecipe from "../DetailRecipe/DetailRecipe";
import DetailYoutube from "../DetailYoutube/DetailYoutube";
import Recipe from "../Recipe/Recipe";
import Recommend from "../Recommend/Recommend";
import styles from "./styles.module.css";

const Detail = ({ recipeApi }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    recipeApi //
      .getId(id)
      .then(data => {
        if (!data) {
          setError("Recipe not found");
        } else {
          setRecipe(data);
        }
        setLoading(false);
      });
  }, [recipeApi, id]);

  return (
    <>
      {!loading && (
        <section className={styles.section}>
          {!error && (
            <>
              <section className={styles.meal}>
                <Recipe recipe={recipe} />
              </section>
              <section className={styles.info}>
                <DetailRecipe recipe={recipe} />
              </section>
              <section className={styles.youtube}>
                <DetailYoutube
                  strYoutube={recipe.strYoutube}
                  strInstructions={recipe.strInstructions}
                />
              </section>
              <section className={styles.recommend}>
                <Recommend
                  recipeApi={recipeApi}
                  strCategory={recipe.strCategory}
                />
              </section>
            </>
          )}
          {error && <div>{error}</div>}
        </section>
      )}
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loading}></div>
        </div>
      )}
    </>
  );
};

export default Detail;
