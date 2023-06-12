import { renderHook } from "@testing-library/react";
import useFetchTransactions from "../useFetchTransactions";
import { INTERNAL_SERVER_ERROR } from "../../constants";
import response from "../../server/response.json";

jest.mock("../useFetchTransactions");

describe("useFetchTransactions hook test", () => {
  it("should return isLoading true", async () => {
    useFetchTransactions.mockReturnValue({
      isLoading: true,
      error: undefined,
      data: undefined,
    });

    const { result } = renderHook(() => useFetchTransactions());

    expect(result.current.isLoading).toBe(true);
  });

  it("should return error", async () => {
    useFetchTransactions.mockReturnValue({
      isLoading: false,
      error: { code: INTERNAL_SERVER_ERROR },
      data: undefined,
    });

    const { result } = renderHook(() => useFetchTransactions());

    expect(result.current.error).not.toBeNull();
  });

  it("should return data", async () => {
    useFetchTransactions.mockReturnValue({
      isLoading: false,
      error: undefined,
      data: response,
    });

    const { result } = renderHook(() => useFetchTransactions());

    expect(result.current.data).not.toBeNull();
  });
});
