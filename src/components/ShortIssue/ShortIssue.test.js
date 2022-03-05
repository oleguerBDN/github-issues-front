import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShortIssue from "./ShortIssue";

describe("Given a ShortIssue component", () => {
  describe("When it's called with title 'Test problem'", () => {
    test("Then it should render a issue with the given title", () => {
      const expectedTitle = "Test problem";

      render(<ShortIssue title={expectedTitle} />);
      const issueTitle = screen.getByRole("heading");

      expect(issueTitle.textContent).toBe(expectedTitle);
    });
  });
  describe("When it's called with author 'Anna' and authorUrl 'www.anna.com'", () => {
    test("Then it should render a issue with the given author url", () => {
      const expectedAuthor = "Anna";
      const expectedUrl = "www.anna.com";

      render(<ShortIssue author={expectedAuthor} authorUrl={expectedUrl} />);
      const issueAuthor = screen.getByRole("link", { name: expectedAuthor });

      expect(issueAuthor).toBeInTheDocument();
      expect(issueAuthor).toHaveAttribute("href", expectedUrl);
    });
  });
  describe("When user clicks on the issue title", () => {
    test("Then the function onClick should be called with the id", () => {
      const onClick = jest.fn();
      const expectedId = "randomid666";

      render(<ShortIssue onClick={onClick} id={expectedId} />);
      const issueTitle = screen.getByRole("heading");

      userEvent.click(issueTitle);

      expect(onClick).toHaveBeenCalledWith(expectedId);
    });
  });
});
