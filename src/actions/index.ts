import * as types from "../constants/ActionTypes";
import { IUser, IFilter, IVacancy } from "../types";
import { createRequestString } from "../components/util/helper";

export const onLogin = (user: IUser) => ({ type: types.ON_LOGIN, user });

export const onExit = () => ({ type: types.ON_EXIT, user: { login: "", password: "" } });

export const onChangeText = (filter: IFilter) => ({ type: types.ON_CHANGE_TEXT, filter });

export const onLoadVacancys = (vacancys: Array<IVacancy>) => ({ type: types.ON_LOAD_VACANCYS, vacancys });

export const onFetchData = (filter: IFilter) => {
  const url = "https://api.hh.ru/vacancies";
  return dispatch => {
    return fetch(url + createRequestString(filter))
      .then(res => res.json())
      .then(response => {
        console.log(response);
        dispatch(onLoadVacancys(response.items));
      })
      .catch(e => {
        throw e;
      });
  };
};
