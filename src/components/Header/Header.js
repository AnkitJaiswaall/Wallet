import React, { useState, useEffect, useRef } from "react";
import style from "./Header.module.css";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={style.header}>
      <div>
        <img src="/icon_back.png" height={"30px"} alt="" />
      </div>
      <h1>Bitcoin Wallet</h1>
      <div className={style["dropdown-container"]} ref={dropdownRef}>
        <img
          src="/icon_more.png"
          height={"30px"}
          alt=""
          onClick={toggleDropdown}
        />
        {showDropdown && <Dropdown />}
      </div>
    </div>
  );
};

export default Header;
