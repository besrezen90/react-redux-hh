import { combineReducers } from "redux";
import { user } from "./user";
import { filter } from "./filter";
import { vacancys } from "./vacancys";
import { pagination } from "./pagination";

export default combineReducers({
  user,
  filter,
  vacancys,
  pagination
});
