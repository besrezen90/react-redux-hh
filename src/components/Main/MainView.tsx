import React, { useEffect } from "react";
import style from "./Main.less";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { IFilter, IVacancy, IPagination, IUser } from "../../types";
import SearchBlock from "../SearchBlock/SearchBlock";
import VacancyCard from "../VacancyCard/VacancyCard";
import Pagination from "../../ui/Pagination/Pagination";
import { getUserToSession } from "../../util/helper";

interface IProps {
  user: IUser;
  filter: IFilter;
  vacancys: Array<IVacancy>;
  pagination: IPagination;
  onChangeText: (filter: IFilter) => void;
  onFetchData: (filter: IFilter, pagination: IPagination) => Promise<void>;
  onGoToPage: (pagination: IPagination) => void;
  onLogin: (user: IUser) => void;
  onExit: () => void;
}

export const MainView: React.FC<IProps> = ({
  user,
  filter,
  vacancys,
  pagination,
  onLogin,
  onExit,
  onChangeText,
  onFetchData,
  onGoToPage
}) => {
  useEffect(() => {
    const data = getUserToSession();
    if (data) onLogin(data);
  }, []);

  useEffect(() => {
    onFetchData(filter, pagination);
  }, [pagination.page]);

  const vacancysList = vacancys.map(vacancy => <VacancyCard key={vacancy.id} vacancy={vacancy} />);

  const noResults = <div>По запросу {filter.text} вакансий не обнаружено.</div>;

  return (
    <div className={style.main}>
      <Header user={user} onExit={onExit} />
      <SearchBlock filter={filter} onChange={onChangeText} onFetchData={() => onFetchData(filter, pagination)} />
      {vacancys.length ? vacancysList : noResults}
      {vacancys.length && <Pagination pagination={pagination} onGoToPage={onGoToPage} />}
      <Footer />
    </div>
  );
};
