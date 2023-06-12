import { INTERNAL_SERVER_ERROR } from "../../constants";
import { mockGetQuarterTransactions } from "../mockAPI";
import response from "../response.json";

describe("mockGetQuarterTransactions", () => {
  test("should resolve with successful response", async () => {
    const result = await mockGetQuarterTransactions();
    expect(result.status).toBe(200);
    expect(result.data).toEqual(response);
  });

  test("should reject with error response", async () => {
    expect.assertions(2);
    try {
      await mockGetQuarterTransactions(true);
    } catch (error) {
      expect(error.status).toBe(500);
      expect(error.code).toBe(INTERNAL_SERVER_ERROR);
    }
  });
});
