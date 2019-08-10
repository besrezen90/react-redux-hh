import { IFilter } from "../../types";

export const createRequestString = (filter: IFilter) => {
  const keys = Object.keys(filter);
  if (keys.length) {
    return keys.reduce((reqString, key) => {
      return (reqString += `?${key}=${filter[key]}`);
    }, "");
  }
  return "";
};
