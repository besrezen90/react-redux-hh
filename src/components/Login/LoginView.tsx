import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import style from "./Login.less";
import { IUser } from "../../types";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

interface IProps {
  user: IUser;
  onLogin: (user: IUser) => { type: string; user: IUser };
}

export const LoginView: React.FC<IProps & RouteComponentProps> = ({ user, onLogin }) => {
  const login = React.createRef<HTMLInputElement>();
  const password = React.createRef<HTMLInputElement>();

  const onClick = () => {
    if (login.current.value && password.current.value) {
      onLogin({ login: login.current.value, password: password.current.value });
    }
  };

  return user.login && user.password ? (
    <Redirect to="/home" />
  ) : (
    <div className={style.login}>
      <Input ref={login} type="text" name="login" placeholder="Введите логин" />
      <Input ref={password} type="password" name="password" placeholder="Введите пароль" />
      <Button text="Войти" onClick={onClick} />
    </div>
  );
};
