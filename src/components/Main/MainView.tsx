import React from "react";
import style from "./Main.less";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { IFilter, IVacancy } from "../../types";
import SearchBlock from "../SearchBlock/SearchBlock";
import VacancyCard from "../VacancyCard/VacancyCard";

interface IProps {
  filter: IFilter;
  vacancys: Array<IVacancy>;
  onChangeText: (filter: IFilter) => void;
}

export const MainView: React.FC<IProps> = ({ filter, vacancys, onChangeText }) => {
  const vacancysList = vacancys.map(vacancy => <VacancyCard key={vacancy.id} vacancy={vacancy} />);
  return (
    <div className={style.main}>
      <Header />
      <SearchBlock filter={filter} onChange={onChangeText} />
      {vacancysList}
      <Footer />
    </div>
  );
};
