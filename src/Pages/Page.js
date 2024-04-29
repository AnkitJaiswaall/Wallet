import React from "react";
import style from "./Page.module.css";
import Header from "../components/Header/Header";
import Currency from "../components/Currency/Currency";
import Graph from "../components/Graph/Graph";
import Feature from "../components/Features/Feature";
import Footer from "../components/Footer/Footer";
const Page = () => {
  return (
    <div>
      <Header />
      <Currency />
      <Graph />
      <div className={style.container}>
        <Feature imageUrl="/icon_dollar.png">Buy BTC</Feature>
        <Feature imageUrl="/icon_dollar.png" backgroundColor="#fd3f93">
          Sell BTC
        </Feature>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
