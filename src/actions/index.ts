import * as types from "../constants/ActionTypes";
import { IUser, IFilter } from "../types";

export const onLogin = (user: IUser) => ({ type: types.ON_LOGIN, user });
export const onExit = () => ({ type: types.ON_EXIT, user: { login: "", password: "" } });
export const onChangeText = (filter: IFilter) => ({ type: types.ON_CHANGE_TEXT, filter });
