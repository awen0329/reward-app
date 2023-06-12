import { waitFor } from "@testing-library/react";
import { mockDelay } from "../mockDelay";

describe("mockDelay function test", () => {
  it("should call cb after timeout", async () => {
    jest.useFakeTimers();
    const cb = jest.fn();
    mockDelay(1000, cb);
    jest.advanceTimersByTime(1000);
    await waitFor(() => {
      expect(cb).toHaveBeenCalled();
    });
  });
});
