import React from "react";
import styles from "./style.module.css";

const DetailYoutube = ({ strYoutube, strInstructions }) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const id = strYoutube && strYoutube.match(regExp)[7];
  return (
    <section className={styles.youtube}>
      {id && (
        <iframe
          width="100%"
          height="650px"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <p className={styles.p}>Instructions</p>
      <pre className={styles.pre}>{strInstructions}</pre>
    </section>
  );
};

export default DetailYoutube;
