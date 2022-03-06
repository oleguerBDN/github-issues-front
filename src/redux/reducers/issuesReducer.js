import actionTypes from "../actions/actionTypes";

const issuesReducer = (issues = {}, action) => {
  let newIssues;
  switch (action.type) {
    case actionTypes.loadIssues:
      newIssues = { ...action.issues };
      break;
    case actionTypes.errorIssues:
      newIssues = {
        ...issues,
        isError: true,
        errorMessage: action.errorMessage,
      };
      break;
    default:
      newIssues = { ...issues, isError: false };
      break;
  }
  return newIssues;
};

export default issuesReducer;
