import React from "react";
import style from "./Main.less";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { IFilter } from "../../types";
import SearchBlock from "../SearchBlock/SearchBlock";

interface IProps {
  filter: IFilter;
  onChangeText: (filter: IFilter) => void;
}

export const MainView: React.FC<IProps> = ({ filter, onChangeText }) => {
  return (
    <div className={style.main}>
      <Header />
      <SearchBlock filter={filter} onChange={onChangeText} />
      <Footer />
    </div>
  );
};
