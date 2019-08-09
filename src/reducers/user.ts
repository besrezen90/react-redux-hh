import { Action } from "redux";
import { ON_LOGIN, ON_EXIT } from "../constants/ActionTypes";
import { IUser } from "../types";

const initialState: IUser = { login: "", password: "" };

export function user(user = initialState, action: Action & { user: IUser }) {
  switch (action.type) {
    case ON_LOGIN:
      const { login, password } = action.user;
      return { ...user, login, password };
    case ON_EXIT:
      return { ...user, ...initialState };

    default:
      return user;
  }
}
