import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import testReducer from "./testReducer";

export default combineReducers({
  simpleReducer,
  testReducer,
});
