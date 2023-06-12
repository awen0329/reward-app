import { calculator } from "../calculator";

describe("Test calculator function", () => {
  it("should return 90 pts for 12000 cents", () => {
    const rewardPoint = calculator(12000);
    expect(rewardPoint).toBeCloseTo(90);
  });
});
