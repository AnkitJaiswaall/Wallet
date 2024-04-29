import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.container}>
      <img src="/icon_wallet.png" alt="" />
      <img src="/icon_explore_coins.png" alt="" />
      <img src="/icon_notification.png" alt="" />
      <img src="/icon_settings.png" alt="" />
    </div>
  );
};

export default Footer;
