import actionTypes from "../actions/actionTypes";

const issueReducer = (issue = {}, action) => {
  let newIssue;
  switch (action.type) {
    case actionTypes.loadIssue:
      newIssue = { ...action.issue };
      break;
    case actionTypes.errorIssue:
      newIssue = {
        ...issue,
        isError: true,
        errorMessage: action.errorMessage,
      };
      break;
    case actionTypes.cleanIssue:
      newIssue = { isError: false };
      break;
    case actionTypes.loadComments:
      newIssue = { ...issue, comments: action.comments };
      break;
    default:
      newIssue = { ...issue, isError: false };
      break;
  }

  return newIssue;
};

export default issueReducer;
