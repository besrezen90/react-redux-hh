import { IFilter, IPagination, IUser } from "../types";

export const createRequestString = (filter: IFilter, pagination: IPagination) => {
  const data = Object.assign({}, filter, pagination);
  const keys = Object.keys(data);
  if (keys.length) {
    return keys.reduce((reqString, key) => {
      return (reqString += `&${key}=${data[key]}`);
    }, "?");
  }
  return "";
};

export const setUserToSession = (user: IUser) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const getUserToSession = () => {
  return JSON.parse(sessionStorage.getItem("user")) as IUser;
};

export const removeUserToSession = () => {
  sessionStorage.removeItem("user");
};
