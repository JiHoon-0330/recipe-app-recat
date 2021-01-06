import React, { useEffect, useState } from "react";
import RandomRecipe from "../Recipe/Recipe";
import styles from "./style.module.css";

const Random = ({ recipeApi }) => {
  const [random, setRandom] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recipeApi.getRandom(4).then(data => {
      setRandom(data);
      setLoading(false);
    });
  }, [recipeApi]);

  return (
    <section>
      <ul className={styles.ul}>
        {!loading &&
          Object.keys(random).map(item => (
            <RandomRecipe key={item} loading={loading} recipe={random[item]} />
          ))}
      </ul>
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loading}></div>
        </div>
      )}
    </section>
  );
};

export default Random;
