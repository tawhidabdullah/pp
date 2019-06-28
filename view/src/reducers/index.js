import {
  combineReducers
} from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import {
  questionReducer,
  selectedQuestionReducer
} from "./questonReducer";



export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  rentals: questionReducer,
  rental: selectedQuestionReducer,
});