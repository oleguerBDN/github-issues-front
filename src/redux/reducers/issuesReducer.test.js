import { errorIssuesAction, loadIssuesAction } from "../actions/actionCreators";
import issuesReducer from "./issuesReducer";

describe("Given a issuesReducer", () => {
  const issues = {
    pageInfo: {
      hasNextPage: true,
      endCursor: "Y3Vyc29yOjI=",
    },
    edges: [
      {
        node: {
          id: "MDU6SXNzdWUyNzQyNzk1MDU=",
          title: "React-test-renderer: support for portal",
          url: "https://github.com/facebook/react/issues/11565",
          number: 11565,
          state: "OPEN",
          author: {
            login: "alansouzati",
          },
        },
      },
      {
        node: {
          id: "MDU6SXNzdWUyODU0OTg1Mjk=",
          title: "Output JUnit XML test metadata for CircleCI",
          url: "https://github.com/facebook/react/issues/11949",
          number: 11949,
          state: "OPEN",
          author: {
            login: "sophiebits",
          },
        },
      },
    ],
  };
  describe("When it receives an action type loadIssues and the issues object", () => {
    test("Then it should return the new issues object", () => {
      const action = loadIssuesAction(issues);

      const newIssues = issuesReducer({}, action);

      expect(newIssues).toEqual(issues);
    });
  });

  describe("When it receives an action type errorIssues and an errorMessage", () => {
    test("Then it should return the issues object with the given error", () => {
      const expectedErrorMessage = "Something is wrong";
      const action = errorIssuesAction(expectedErrorMessage);

      const newIssues = issuesReducer({}, action);

      expect(newIssues).toHaveProperty("isError", true);
      expect(newIssues).toHaveProperty("errorMessage", expectedErrorMessage);
    });
  });

  describe("When it receives a non controled action type", () => {
    test("Then it should return the existing issues object without error", () => {
      const action = { type: "whatever" };

      const newIssues = issuesReducer(issues, action);

      expect(newIssues).toHaveProperty("isError", false);
      expect(newIssues).toEqual({ ...issues, isError: false });
    });
  });
});
