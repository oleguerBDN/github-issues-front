import { render, screen } from "@testing-library/react";
import Issue from "./Issue";
import ReactTestRenderer from "react-test-renderer";

describe("Given a Issue component", () => {
  describe("When it's called a title and author", () => {
    test("Then it should render both the given title and the author", () => {
      const expectedTitle = "useState bug";
      const expectedAuthor = "Karim";

      render(
        <Issue title={expectedTitle} author={expectedAuthor} authorUrl={""} />
      );
      const issueTitle = screen.getByRole("heading", { name: expectedTitle });
      const issueAuthor = screen.getByRole("link", { name: expectedAuthor });

      expect(issueTitle).toBeInTheDocument();
      expect(issueAuthor).toBeInTheDocument();
    });
  });

  describe("When it's called with an html body including a heading", () => {
    test("Then it should render this HTML", () => {
      const htmlBody = "<h4>Just a heading</h4>";
      const expectedTitle = "Just a heading";

      render(<Issue body={htmlBody} />);
      const htmlBodyHeading = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(htmlBodyHeading).toBeInTheDocument();
    });
  });

  describe("When it's called with all the props", () => {
    test("Then it should render an Issue matching the snapshot", () => {
      const title = "Just a title for testing";
      const author = "Karim";
      const authorUrl = "https://www.karim.com";
      const state = "CLOSED";
      const htmlBody = "<p>Just an html body, nothing different</p>";

      const issue = ReactTestRenderer.create(
        <Issue
          title={title}
          author={author}
          authorUrl={authorUrl}
          state={state}
          body={htmlBody}
        />
      );

      expect(issue.toJSON()).toMatchSnapshot();
    });
  });
});
