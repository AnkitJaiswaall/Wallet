import React from "react";
import style from "./Dropdown.module.css";
const Dropdown = () => {
  return (
    <div>
      <div
        className={style["dropdown-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <p>
          <span>Edit</span> <span className={style.symbol}>&#9998;</span>
        </p>
        <hr />
        <p>
          <span>Courier info</span>{" "}
          <span className={style.symbol}>&#9054;</span>
        </p>
        <hr />
        <p>
          <span>Share</span> <span className={style.symbol}>&#10548;</span>
        </p>
        <hr />
        <p className={style.custom}>
          <span>Remove</span> <span className={style.symbol}>&#8856;</span>
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
