import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, selected, customClass }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonClass = `${styles.button} ${
    selected ? styles.selectedButton : ""
  } ${customClass || ""}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
