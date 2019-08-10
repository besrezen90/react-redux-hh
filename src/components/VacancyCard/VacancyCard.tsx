import React from "react";
import style from "./VacancyCard.less";
import { IVacancy } from "../../types";
import Button from "../../ui/Button/Button";
import moment from "moment";

interface IProps {
  vacancy: IVacancy;
}

const VacancyCard: React.FC<IProps> = ({ vacancy }) => {
  const { name, employer, salary, area, snippet, published_at } = vacancy;
  return (
    <div className={style.vacancyCard}>
      <div className={style.rows}>
        <span className={style.vacancyName}>{name}</span>
        <span className={style.employerName}>{employer.name}</span>
      </div>

      <div className={style.rows}>
        {salary && (
          <span className={style.salary}>
            {salary.from && `от ${salary.from}`} {salary.to && `до ${salary.to}`} {salary.currency}
          </span>
        )}

        <span>{area.name}</span>
      </div>

      <p>{snippet.responsibility ? snippet.responsibility.replace(/(\<(\/?[^>]+)>)/g, "") : "Без описания"}</p>
      <p>{snippet.requirement && snippet.requirement.replace(/(\<(\/?[^>]+)>)/g, "")}</p>

      <div className={style.rows}>
        <span>Дата публикации: {moment(published_at).format("DD.MM.YYYY")}</span>
        <Button text="Подробнее" />
      </div>
    </div>
  );
};

export default VacancyCard;
