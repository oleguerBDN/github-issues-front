import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's called", () => {
    test("Then it should render a form with an input and a select", () => {
      render(<Form />);
      const input = screen.getByRole("textbox");
      const select = screen.getByRole("combobox");

      expect(input).toBeInTheDocument();
      expect(select).toHaveLength(2);
    });
  });

  describe("When it's submitted", () => {
    test("Then it should call the onSubmit function", () => {
      const onSubmit = jest.fn();

      render(<Form onSubmit={onSubmit} />);
      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
