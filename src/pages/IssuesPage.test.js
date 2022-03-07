import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../mocks/renderWithProviders";
import { server } from "../mocks/server";
import IssuesPage from "./IssuesPage";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a IssuesPage", () => {
  describe("When it's called", () => {
    test("Then it should render a loading", () => {
      const loadingText = "LOADING...";

      renderWithProviders(
        <BrowserRouter>
          <IssuesPage />
        </BrowserRouter>
      );

      const loading = screen.getByText(loadingText);
      expect(loading).toBeInTheDocument();
    });
  });
  describe("When it's called and waiting for api response", () => {
    test("Then it should render a list of issues", async () => {
      const expectedFirstIssueTitle =
        "React app works as intended in development mode, but in production mode has another behaviour.";
      const expectedSecondIssueTitle =
        "Bug: ReactArt-test fails with new node version";

      renderWithProviders(
        <BrowserRouter>
          <IssuesPage />
        </BrowserRouter>
      );
      const firstIssueTitle = await screen.findByRole("heading", {
        name: expectedFirstIssueTitle,
      });
      const secondIssueTitle = await screen.findByRole("heading", {
        name: expectedSecondIssueTitle,
      });

      expect(firstIssueTitle).toBeInTheDocument();
      expect(secondIssueTitle).toBeInTheDocument();
    });
  });
  describe("When it's rendered, user fill input and submit form", () => {
    test("Then it should render a new list of issues", async () => {
      const expectedFirstIssueTitle = "Testing title 1";
      const expectedSecondIssueTitle = "Testing title 2";

      renderWithProviders(
        <BrowserRouter>
          <IssuesPage />
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: "Search" });
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "testing");
      await userEvent.click(submitButton);

      const firstIssueTitle = await screen.findByRole("heading", {
        name: expectedFirstIssueTitle,
      });
      const secondIssueTitle = await screen.findByRole("heading", {
        name: expectedSecondIssueTitle,
      });

      expect(firstIssueTitle).toBeInTheDocument();
      expect(secondIssueTitle).toBeInTheDocument();
    });
  });
  describe("When it's rendered and user clicks next button", () => {
    test("Then it should render a new list of issues", async () => {
      const expectedFirstIssueTitle = "Next title 1";
      const expectedSecondIssueTitle = "Next title 2";

      renderWithProviders(
        <BrowserRouter>
          <IssuesPage />
        </BrowserRouter>
      );

      const nextButton = screen.getByRole("button", { name: "Next" });
      await userEvent.click(nextButton);

      const firstIssueTitle = await screen.findByRole("heading", {
        name: expectedFirstIssueTitle,
      });
      const secondIssueTitle = await screen.findByRole("heading", {
        name: expectedSecondIssueTitle,
      });

      expect(firstIssueTitle).toBeInTheDocument();
      expect(secondIssueTitle).toBeInTheDocument();
    });
  });
  describe("When it's rendered and user clicks previous button", () => {
    test("Then it should render a new list of issues", async () => {
      const expectedFirstIssueTitle = "Previous title 1";
      const expectedSecondIssueTitle = "Previous title 2";

      renderWithProviders(
        <BrowserRouter>
          <IssuesPage />
        </BrowserRouter>
      );

      const previousButton = screen.getByRole("button", { name: "Previous" });
      await userEvent.click(previousButton);

      const firstIssueTitle = await screen.findByRole("heading", {
        name: expectedFirstIssueTitle,
      });
      const secondIssueTitle = await screen.findByRole("heading", {
        name: expectedSecondIssueTitle,
      });

      expect(firstIssueTitle).toBeInTheDocument();
      expect(secondIssueTitle).toBeInTheDocument();
    });
  });
});
