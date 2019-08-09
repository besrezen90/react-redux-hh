import React from "react";
import style from "./Home.less";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface IProps {}

const Home: React.FC<IProps> = props => {
  return (
    <div className={style.main}>
      <Header />
      главная страница
      <Footer />
    </div>
  );
};

export default Home;
