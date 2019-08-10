import React from "react";
import { Link } from "react-router-dom";

import style from "./Header.less";
import { IUser } from "../../types";
import { removeUserToSession } from "../../util/helper";

interface IProps {
  user: IUser;
  onExit: () => void;
}

const Header: React.FC<IProps> = ({ user, onExit }) => {
  const onClick = () => {
    removeUserToSession();
    onExit();
  };

  return (
    <div className={style.header}>
      <span>Добро пожаловать {user.login}</span>
      <Link to="/" className={style.button} onClick={onClick}>
        Выйти
      </Link>
    </div>
  );
};

export default Header;
