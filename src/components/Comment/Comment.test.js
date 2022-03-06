import { render, screen } from "@testing-library/react";
import Comment from "./Comment";

describe("Given a Comment component", () => {
  describe("When it's called an author and it's url", () => {
    test("Then it should render the given author with the href", () => {
      const expectedUrl = "https://www.karim.com/";
      const expectedAuthor = "Karim";

      render(<Comment author={expectedAuthor} authorUrl={expectedUrl} />);
      const commentAuthor = screen.getByRole("link", { name: expectedAuthor });

      expect(commentAuthor).toBeInTheDocument();
      expect(commentAuthor).toHaveProperty("href", expectedUrl);
    });
  });
  describe("When it's called with an html body including a text", () => {
    test("Then it should render this HTML", () => {
      const htmlBody = "<p>Just a text</p>";
      const expectedText = "Just a text";

      render(<Comment body={htmlBody} />);
      const htmlBodyText = screen.getByText(expectedText);

      expect(htmlBodyText).toBeInTheDocument();
    });
  });
});
