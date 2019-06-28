import {
  combineReducers
} from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import {
  questonReducer,
  selectedQuestionReducer
} from "./questonReducer";



export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  rentals: questonReducer,
  rental: selectedQuestionReducer,
});