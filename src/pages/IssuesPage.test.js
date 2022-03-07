import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../mocks/renderWithProviders";
import IssuesPage from "./IssuesPage";

import { setupServer } from "msw/node";
import { handlers } from "../mocks/handlers";

const server = setupServer(...handlers);
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
    test.only("Then it should render a list of issues", async () => {
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
});
