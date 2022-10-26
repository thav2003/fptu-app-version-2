import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./AuthReducer";

const reducers = combineReducers({
  authReducer,
  form: formReducer,
});

export default reducers;
