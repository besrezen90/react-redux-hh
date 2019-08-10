import { Action } from "redux";
import { IVacancy } from "../types";
import { ON_LOAD_VACANCYS } from "../constants/ActionTypes";

const initialState: Array<IVacancy> = [];

export function vacancys(vacancys = initialState, action: Action & { vacancys: Array<IVacancy> }) {
  switch (action.type) {
    case ON_LOAD_VACANCYS:
      return [...action.vacancys];
    default:
      return vacancys;
  }
}
