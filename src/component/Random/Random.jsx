import React, { useEffect, useState } from "react";
import Favorit from "../Favorit/Favorit";
import RandomRecipe from "../Recipe/Recipe";
import styles from "./style.module.css";

const Random = ({ recipeApi }) => {
  const [random, setRandom] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recipeApi.getRandom(8).then(data => {
      setRandom(data);
      setLoading(false);
    });
    return setLoading(true);
  }, [recipeApi]);

  return (
    <>
      {!loading && (
        <section className={styles.section}>
          <div className={styles.favorit}>
            <Favorit />
          </div>
          <div className={styles.random}>
            <h2 className={styles.h2}>오늘의 레시피</h2>
            <ul className={styles.ul}>
              {Object.keys(random).map(item => (
                <RandomRecipe
                  key={item}
                  loading={loading}
                  recipe={random[item]}
                />
              ))}
            </ul>
          </div>
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

export default Random;
