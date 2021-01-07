import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailRecipe from "../DetailRecipe/DetailRecipe";
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
        <section className={styles.div}>
          {!error && (
            <>
              <DetailRecipe recipe={recipe} />
              <Recommend
                recipeApi={recipeApi}
                strCategory={recipe.strCategory}
              />
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
