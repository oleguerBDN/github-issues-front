import actionTypes from "./actionTypes";

export const loadIssuesAction = (issues) => ({
  type: actionTypes.loadIssues,
  issues,
});

export const loadIssueAction = (issue) => ({
  type: actionTypes.loadIssue,
  issue,
});

export const loadCommentsAction = (comments) => ({
  type: actionTypes.loadComments,
  comments,
});

export const errorIssuesAction = (errorMessage) => ({
  type: actionTypes.errorIssues,
  errorMessage,
});

export const errorIssueAction = (errorMessage) => ({
  type: actionTypes.errorIssue,
  errorMessage,
});

export const cleanIssueAction = () => ({
  type: actionTypes.cleanIssue,
});
