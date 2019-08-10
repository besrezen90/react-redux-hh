import { combineReducers } from "redux";
import { user } from "./user";
import { filter } from "./filter";
import { vacancys } from "./vacancys";

export default combineReducers({
  user,
  filter,
  vacancys
});
