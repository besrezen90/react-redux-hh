import React from 'react';
import style from './Login.less';
import { IUser } from '../../types';
import { RouteComponentProps, Redirect } from 'react-router-dom';

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
      <input ref={login} className={style.input} type="text" name="login" placeholder="Введите логин" />
      <input ref={password} className={style.input} type="password" name="password" placeholder="Введите пароль" />
      <button className={style.button} onClick={onClick}>
        Войти
      </button>
    </div>
  );
};
