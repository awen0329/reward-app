import { render, screen } from "@testing-library/react";
import {
  INTERNAL_SERVER_ERROR,
  TEST_LOADER_ID,
  TEST_PAGINATION_ID,
  TEST_REWARD_ERROR,
  TEST_TABLE_ID,
} from "../../constants";
import Rewards from "../rewards";
import useFetchTransactions from "../../hooks/useFetchTransactions";
import data from "../../server/response.json";

jest.mock("../../hooks/useFetchTransactions");

describe("Rewards page", () => {
  it("should render loader", async () => {
    useFetchTransactions.mockReturnValue({
      isLoading: true,
      error: undefined,
      data: undefined,
    });
    render(<Rewards />);
    expect(screen.getByTestId(TEST_LOADER_ID)).toBeInTheDocument();
  });

  it("should render error message", async () => {
    useFetchTransactions.mockReturnValue({
      isLoading: false,
      error: { code: INTERNAL_SERVER_ERROR },
      data: undefined,
    });
    render(<Rewards />);

    expect(screen.getByTestId(TEST_REWARD_ERROR)).toBeInTheDocument();
  });

  it("should render table", async () => {
    useFetchTransactions.mockReturnValue({
      isLoading: false,
      error: undefined,
      data: data,
    });

    render(<Rewards />);

    expect(screen.getByTestId(TEST_TABLE_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_PAGINATION_ID)).toBeInTheDocument();
  });
});
