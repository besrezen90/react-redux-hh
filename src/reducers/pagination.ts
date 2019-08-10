import { Action } from "redux";
import { IPagination } from "../types";
import { ON_UPDATE_PAGINATION, ON_GO_TO_PAGE } from "../constants/ActionTypes";

const initialState: IPagination = { page: 0, per_page: 10 };

export function pagination(pagination = initialState, action: Action & { pagination: IPagination }) {
  switch (action.type) {
    case ON_UPDATE_PAGINATION:
      return { ...action.pagination };
    case ON_GO_TO_PAGE:
      return { ...action.pagination };
    default:
      return pagination;
  }
}
