import { combineReducers } from "redux";
import stockReducer from "./stockCounter";
import goodsReducer from "./goodsCounter";

const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
});
export default rootReducer;
