import { combineReducers } from "redux";

import post from "./post";
import user from "./uesr";

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
