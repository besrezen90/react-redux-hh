import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import style from "./Login.less";
import { IUser } from "../../types";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { setUserToSession } from "../../util/helper";

interface IProps {
  user: IUser;
  onLogin: (user: IUser) => { type: string; user: IUser };
}

export const LoginView: React.FC<IProps & RouteComponentProps> = ({ user, onLogin }) => {
  const loginInput = React.createRef<HTMLInputElement>();
  const passwordInput = React.createRef<HTMLInputElement>();

  const onClick = () => {
    const login = loginInput.current.value;
    const password = passwordInput.current.value;
    if (login && password) {
      setUserToSession({ login, password });
      onLogin({ login, password });
    }
  };

  return user.login && user.password ? (
    <Redirect to="/home" />
  ) : (
    <div className={style.login}>
      <Input ref={loginInput} type="text" name="login" placeholder="Введите логин" />
      <Input ref={passwordInput} type="password" name="password" placeholder="Введите пароль" />
      <Button text="Войти" onClick={onClick} />
    </div>
  );
};
