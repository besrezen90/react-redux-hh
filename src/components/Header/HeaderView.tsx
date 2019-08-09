import React from "react";
import { Link } from "react-router-dom";

import style from "./Header.less";

interface IProps {
  name: string;
  onExit: () => void;
}

export const HeaderView: React.FC<IProps> = ({ name, onExit }) => {
  return (
    <div className={style.header}>
      <span>Добро пожаловать {name}</span>
      <Link to="/" className={style.button} onClick={onExit}>
        Выйти
      </Link>
    </div>
  );
};
