import * as types from "../constants/ActionTypes";
import { IUser, IFilter, IVacancy, IApiResponse, IPagination } from "../types";
import { createRequestString } from "../util/helper";

export const onLogin = (user: IUser) => ({ type: types.ON_LOGIN, user });

export const onExit = () => ({ type: types.ON_EXIT, user: { login: "", password: "" } });

export const onChangeText = (filter: IFilter) => ({ type: types.ON_CHANGE_TEXT, filter });

export const onLoadVacancys = (vacancys: Array<IVacancy>) => ({ type: types.ON_LOAD_VACANCYS, vacancys });

export const onUpdatePagination = (pagination: IPagination) => ({ type: types.ON_UPDATE_PAGINATION, pagination });

export const onGoToPage = (pagination: IPagination) => ({ type: types.ON_GO_TO_PAGE, pagination });

export const onFetchData = (filter: IFilter, pagination: IPagination) => {
  const url = "https://api.hh.ru/vacancies";
  return dispatch => {
    return fetch(url + createRequestString(filter, pagination))
      .then(res => res.json())
      .then((response: IApiResponse) => {
        const { page, pages, per_page } = response;
        dispatch(onUpdatePagination({ page, pages, per_page }));
        dispatch(onLoadVacancys(response.items));
      })
      .catch(e => {
        throw e;
      });
  };
};
