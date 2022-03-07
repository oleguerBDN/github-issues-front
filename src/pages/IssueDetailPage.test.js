import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../mocks/renderWithProviders";
import { server } from "../mocks/server";
import IssueDetailPage from "./IssueDetailPage";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a IssueDetailPage", () => {
  describe("When it's called", () => {
    test("Then it should render a loading", () => {
      const loadingText = "LOADING...";

      renderWithProviders(
        <BrowserRouter>
          <IssueDetailPage />
        </BrowserRouter>
      );

      const loading = screen.getByText(loadingText);
      expect(loading).toBeInTheDocument();
    });
  });
  describe("When it's called and waiting for api response", () => {
    test("Then it should render the issue", async () => {
      const expectedTitle = "Issue for testing";
      const expectedTextBody = "html body for testing";

      renderWithProviders(
        <BrowserRouter>
          <IssueDetailPage />
        </BrowserRouter>
      );
      const issueTitle = await screen.findByRole("heading", {
        name: expectedTitle,
      });
      const textBody = await screen.findByText(expectedTextBody);

      expect(issueTitle).toBeInTheDocument();
      expect(textBody).toBeInTheDocument();
    });
    test("Then it should render the comments", async () => {
      const expectedFirstComment = "comment 1";
      const expectedSecondComment = "comment 2";
      const expectedThirdComment = "comment 3";
      const expectedFourthComment = "comment 4";
      const expectedFifthComment = "comment 5";

      renderWithProviders(
        <BrowserRouter>
          <IssueDetailPage />
        </BrowserRouter>
      );

      const firstComment = await screen.findByText(expectedFirstComment);
      const secondComment = await screen.findByText(expectedSecondComment);
      const thirdComment = await screen.findByText(expectedThirdComment);
      const fourthComment = await screen.findByText(expectedFourthComment);
      const fifthComment = await screen.findByText(expectedFifthComment);

      expect(firstComment).toBeInTheDocument();
      expect(secondComment).toBeInTheDocument();
      expect(thirdComment).toBeInTheDocument();
      expect(fourthComment).toBeInTheDocument();
      expect(fifthComment).toBeInTheDocument();
    });
  });
  describe("When it's called and next pagination button clicked", () => {
    test("Then it should render the new comments", async () => {
      const expectedFirstComment = "comment next 1";

      renderWithProviders(
        <BrowserRouter>
          <IssueDetailPage />
        </BrowserRouter>
      );

      const nextButton = await screen.findByRole("button", { name: "Next" });
      await userEvent.click(nextButton);

      const firstComment = await screen.findByText(expectedFirstComment);

      expect(firstComment).toBeInTheDocument();
    });
  });

  describe("When it's called and previous pagination button clicked", () => {
    test("Then it should render the new comments", async () => {
      const expectedFirstComment = "comment previous 1";

      renderWithProviders(
        <BrowserRouter>
          <IssueDetailPage />
        </BrowserRouter>
      );

      const previousButton = await screen.findByRole("button", {
        name: "Previous",
      });
      await userEvent.click(previousButton);

      const firstComment = await screen.findByText(expectedFirstComment);

      expect(firstComment).toBeInTheDocument();
    });
  });
});
