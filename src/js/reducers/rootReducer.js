import { combineReducers } from "redux";
import traitsReducer from "./traitReducer";

const reducers = {
  traits: traitsReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
