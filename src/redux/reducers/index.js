import { combineReducers } from "redux";
import issuesReducer from "./issuesReducer";
import issueReducer from "./issueReducer";

const rootReducer = combineReducers({
  issues: issuesReducer,
  issue: issueReducer,
});

export default rootReducer;
