import { createStore, Action } from 'redux';

export interface IUser {
  login: string;
  password: string;
}

export function user(user: IUser = { login: '', password: '' }, action: Action & { user: IUser }) {
  if (action.type === 'ON_LOGIN') {
    const { login, password } = action.user;
    return { ...user, login, password };
  }
  return user;
}
