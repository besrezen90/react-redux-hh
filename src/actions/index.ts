import * as types from "../constants/ActionTypes";
import { IUser } from "../types";

export const onLogin = (user: IUser) => ({ type: types.ON_LOGIN, user });
export const onExit = () => ({ type: types.ON_EXIT, user: { login: "", password: "" } });
