import { combineReducers } from "redux";
import { noteReducer } from "./noteReducer";
import handleErrorReducer from "./handleErrorReducer";

export const rootReducer = combineReducers({
  notes: noteReducer,
  errorMessage: handleErrorReducer
});

export default rootReducer;
