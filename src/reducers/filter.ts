import { Action } from "redux";
import { IFilter } from "../types";
import { ON_CHANGE_TEXT } from "../constants/ActionTypes";

const initialState: IFilter = { text: "" };

export function filter(filter = initialState, action: Action & { filter: IFilter }) {
  switch (action.type) {
    case ON_CHANGE_TEXT:
      const { text } = action.filter;
      return { ...filter, text };
    default:
      return filter;
  }
}
