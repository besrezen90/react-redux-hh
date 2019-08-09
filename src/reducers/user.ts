import { Action } from 'redux';
import { ON_LOGIN } from '../constants/ActionTypes';
import { IUser } from '../types';

const initialState: IUser = { login: '', password: '' };

export function user(user: IUser = initialState, action: Action & { user: IUser }) {
  switch (action.type) {
    case ON_LOGIN:
      const { login, password } = action.user;
      return { ...user, login, password };

    default:
      return user;
  }
}
