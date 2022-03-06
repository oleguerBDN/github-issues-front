import { render, screen } from "@testing-library/react";
import Issue from "./Issue";

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
});
