import React from "react";
import styles from "./Feature.module.css";

const Feature = ({ imageUrl, backgroundColor, children }) => {
  return (
    <div className={styles["feature-container"]}>
      <div className={styles["feature-image"]} style={{ backgroundColor }}>
        <span className={styles.dollar}>$</span>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Feature;
