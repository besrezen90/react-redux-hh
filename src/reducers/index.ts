import { combineReducers } from "redux";
import { user } from "./user";
import { filter } from "./filter";

export default combineReducers({
  user,
  filter
});
