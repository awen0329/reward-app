import { act, render, screen } from "@testing-library/react";
import Pagination from "../pagination";
import {
  TEST_PAGINATION_NEXT_BUTTON_ID,
  TEST_PAGINATION_PAGE_NUM_BUTTON_ID,
  TEST_PAGINATION_PREV_BUTTON_ID,
} from "../../constants";
import userEvent from "@testing-library/user-event";

const mockPageChange = jest.fn();

describe("Pagination", () => {
  it("should render next, prev button", async () => {
    render(<Pagination page={3} count={5} onPageChange={mockPageChange} />);

    expect(
      screen.getByTestId(TEST_PAGINATION_NEXT_BUTTON_ID)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_PAGINATION_PREV_BUTTON_ID)
    ).toBeInTheDocument();
  });

  it("should render 5 page nums", async () => {
    render(<Pagination page={3} count={5} onPageChange={mockPageChange} />);

    expect(
      screen.getAllByTestId(TEST_PAGINATION_PAGE_NUM_BUTTON_ID).length
    ).toBe(5);
  });

  it("should call onPageChange func when click page num", async () => {
    render(<Pagination page={3} count={5} onPageChange={mockPageChange} />);

    const element = screen.getAllByTestId(
      TEST_PAGINATION_PAGE_NUM_BUTTON_ID
    )[0];
    await act(() => {
      userEvent.click(element);
    });
    expect(mockPageChange).toBeCalledTimes(1);
  });

  it("should call onPageChange func when click next button", async () => {
    render(<Pagination page={3} count={5} onPageChange={mockPageChange} />);

    const element = screen.getByTestId(TEST_PAGINATION_NEXT_BUTTON_ID);
    await act(() => {
      userEvent.click(element);
    });
    expect(mockPageChange).toBeCalledTimes(1);
  });

  it("should call onPageChange func when click prev button", async () => {
    render(<Pagination page={3} count={5} onPageChange={mockPageChange} />);

    const element = screen.getByTestId(TEST_PAGINATION_PREV_BUTTON_ID);
    await act(() => {
      userEvent.click(element);
    });
    expect(mockPageChange).toBeCalledTimes(1);
  });

  it("should render disabled prev button when page = 1", async () => {
    render(<Pagination page={1} count={5} onPageChange={mockPageChange} />);
    const prevBtn = screen.getByTestId(TEST_PAGINATION_PREV_BUTTON_ID);
    expect(prevBtn).toHaveClass("page-item disabled");
  });

  it("should render disabled next button when page = last page", async () => {
    render(<Pagination page={5} count={5} onPageChange={mockPageChange} />);
    const nextBtn = screen.getByTestId(TEST_PAGINATION_NEXT_BUTTON_ID);
    expect(nextBtn).toHaveClass("page-item disabled");
  });
});
