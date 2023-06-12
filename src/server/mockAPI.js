import mockResponseData from "./response.json";
import { mockDelay } from "./mockDelay";
import { INTERNAL_SERVER_ERROR } from "../constants";

/**
 * Mock fetching quarter transaction record for all customers
 * @param { boolean } mockFailed switch to mock successful/failed api call
 * @returns Promise
 */
export function mockGetQuarterTransactions(mockFailed = false) {
  return new Promise((resolve, reject) => {
    if (mockFailed) {
      mockDelay(1000, () =>
        reject({ status: 500, code: INTERNAL_SERVER_ERROR })
      );
    } else {
      mockDelay(1500, () => resolve({ status: 200, data: mockResponseData }));
    }
  });
}
