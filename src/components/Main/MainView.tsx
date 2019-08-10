import React, { useEffect } from "react";
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
  onFetchData: (filter: IFilter) => Promise<void>;
}

export const MainView: React.FC<IProps> = ({ filter, vacancys, onChangeText, onFetchData }) => {
  useEffect(() => {
    onFetchData(filter);
  }, []);

  const vacancysList = vacancys.map(vacancy => <VacancyCard key={vacancy.id} vacancy={vacancy} />);

  const noResults = <div>По запросу {filter.text} вакансий не обнаружено.</div>;

  return (
    <div className={style.main}>
      <Header />
      <SearchBlock filter={filter} onChange={onChangeText} onFetchData={onFetchData} />
      {vacancys.length ? vacancysList : noResults}
      <Footer />
    </div>
  );
};
