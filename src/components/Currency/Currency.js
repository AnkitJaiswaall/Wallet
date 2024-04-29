import React, { useState } from "react";
import style from "../Currency/Currency.module.css";
import ButtonGraph from "../Buttons/Button";
const Currency = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={style["crypto-box"]}>
      <div className={style.currency}>
        <div className={style.symbol}>
          <img src="/icon_bitcoin.png" alt="" />
          <span>Bitcoin</span>
        </div>
        <div className={style.name}>BTC</div>
      </div>

      <div className={style.portfolio}>
        <div className={style.count}>3.529020 BTC</div>
        <div>
          <span className={style.value}>$19.153 USD</span>
          <span className={style.change}>-2.32%</span>
        </div>
      </div>
      <div className={style.more}>
        <img
          src="/icon_arrow_down_detailed_.png"
          onClick={toggleExpand}
          alt=""
        />
      </div>
      {expanded && (
        <div className={style.expandedContent}>
          <ButtonGraph label={"Buy BTC"} customClass={style.btnBuy} />
          <ButtonGraph label={"Sell BTC"} customClass={style.btnSell} />
        </div>
      )}
    </div>
  );
};

export default Currency;
