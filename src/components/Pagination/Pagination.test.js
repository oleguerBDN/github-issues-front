import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it's called", () => {
    test("Then it should render the previous and next buttons", () => {
      const pageInfo = { hasPreviousPage: true, hasNextPage: true };
      const previousText = "Previous";
      const nextText = "Next";

      render(<Pagination pageInfo={pageInfo} />);

      const buttonPrevious = screen.getByRole("button", { name: previousText });
      const buttonNext = screen.getByRole("button", { name: nextText });

      expect(buttonPrevious).toBeInTheDocument();
      expect(buttonNext).toBeInTheDocument();
    });
  });

  describe("When it's called and buttons are enabled and clicked", () => {
    test("Then it should call the onClick functions", () => {
      const pageInfo = { hasPreviousPage: true, hasNextPage: true };
      const previousText = "Previous";
      const nextText = "Next";
      const onClickPrevious = jest.fn();
      const onClickNext = jest.fn();

      render(
        <Pagination
          pageInfo={pageInfo}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
        />
      );

      const buttonPrevious = screen.getByRole("button", { name: previousText });
      const buttonNext = screen.getByRole("button", { name: nextText });
      userEvent.click(buttonPrevious);
      userEvent.click(buttonNext);

      expect(onClickPrevious).toHaveBeenCalledTimes(1);
      expect(onClickNext).toHaveBeenCalledTimes(1);
    });
  });
  describe("When it's called and buttons are disabled and clicked", () => {
    test("Then it should NOT call the onClick functions", () => {
      const pageInfo = { hasPreviousPage: false, hasNextPage: false };
      const previousText = "Previous";
      const nextText = "Next";
      const onClickPrevious = jest.fn();
      const onClickNext = jest.fn();

      render(
        <Pagination
          pageInfo={pageInfo}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
        />
      );
      const buttonPrevious = screen.getByRole("button", { name: previousText });
      const buttonNext = screen.getByRole("button", { name: nextText });
      userEvent.click(buttonPrevious);
      userEvent.click(buttonNext);

      expect(onClickPrevious).not.toHaveBeenCalled();
      expect(onClickNext).not.toHaveBeenCalled();
    });
  });
});
