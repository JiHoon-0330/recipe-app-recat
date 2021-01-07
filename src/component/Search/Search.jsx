import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import styles from "./style.module.css";

const Search = ({ recipeApi }) => {
  const { keyword } = useParams();
  const [category, setCotegory] = useState(null);
  const [area, setArea] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    recipeApi.getCategory(keyword).then(data => {
      if (!data) {
      } else {
        setCotegory(data);
      }
    });
    recipeApi.getArea(keyword).then(data => {
      if (!data) {
      } else {
        setArea(data);
      }
    });
    recipeApi.getName(keyword).then(data => {
      if (!data) {
      } else {
        setName(data);
      }
    });
  }, [recipeApi, keyword]);
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.title}>Name</p>
        {name && (
          <ul className={styles.ul}>
            {Object.keys(name).map(item => (
              <Recipe key={item} recipe={name[item]} />
            ))}
          </ul>
        )}
        {!name && (
          <p className={styles.p}>'{keyword}' name recipe could not be found</p>
        )}
      </div>
      <div>
        <p className={styles.title}>Category</p>
        {category && (
          <ul className={styles.ul}>
            {Object.keys(category).map(item => (
              <Recipe key={item} recipe={category[item]} />
            ))}
          </ul>
        )}
        {!category && (
          <p className={styles.p}>
            '{keyword}' category recipe could not be found
          </p>
        )}
      </div>
      <div>
        <p className={styles.title}>Area</p>
        {area && (
          <ul className={styles.ul}>
            {Object.keys(area).map(item => (
              <Recipe key={item} recipe={area[item]} />
            ))}
          </ul>
        )}
        {!area && (
          <p className={styles.p}>'{keyword}' area recipe could not be found</p>
        )}
      </div>
    </section>
  );
};

export default Search;
