import React from "react";
import style from "./Main.less";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface IProps {}

const Main: React.FC<IProps> = props => {
  return (
    <div className={style.main}>
      <Header />
      главная страница
      <Footer />
    </div>
  );
};

export default Main;
