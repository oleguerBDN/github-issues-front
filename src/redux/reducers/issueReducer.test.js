import {
  cleanIssueAction,
  errorIssueAction,
  loadCommentsAction,
  loadIssueAction,
} from "../actions/actionCreators";
import issueReducer from "./issueReducer";

describe("Given a issueReducer", () => {
  const issue = {
    node: {
      title: "React-test-renderer: support for portal",
      state: "OPEN",
      bodyHTML: "<h1>body title</h1>",
      author: {
        login: "alansouzati",
        url: "https://github.com/alansouzati",
      },
    },
  };

  describe("When it receives an action type loadIssue and the issue object", () => {
    test("Then it should return the new issue object", () => {
      const action = loadIssueAction(issue);

      const newIssue = issueReducer({}, action);

      expect(newIssue).toEqual(issue);
    });
  });

  describe("When it receives an action type errorIssue and an errorMessage", () => {
    test("Then it should return the issue object with the given error", () => {
      const expectedErrorMessage = "Something is wrong";
      const action = errorIssueAction(expectedErrorMessage);

      const newIssue = issueReducer({}, action);

      expect(newIssue).toHaveProperty("isError", true);
      expect(newIssue).toHaveProperty("errorMessage", expectedErrorMessage);
    });
  });

  describe("When it receives an action type cleanIssue", () => {
    test("Then it should return de issue object empty with isError:false property", () => {
      const action = cleanIssueAction();

      const newIssue = issueReducer(issue, action);

      expect(newIssue).toEqual({ isError: false });
    });
  });

  describe("When it receives a non controled action type", () => {
    test("Then it should return the existing issue object without error", () => {
      const action = { type: "whatever" };

      const newIssue = issueReducer(issue, action);

      expect(newIssue).toHaveProperty("isError", false);
      expect(newIssue).toEqual({ ...issue, isError: false });
    });
  });

  describe("When it receives an action type loadComments and the comments object", () => {
    test("Then it should return the existing issue with new comments", () => {
      const comments = { comments: "Testing" };
      const action = loadCommentsAction(comments);

      const newIssue = issueReducer(issue, action);

      expect(newIssue).toEqual({ ...issue, comments });
    });
  });
});
