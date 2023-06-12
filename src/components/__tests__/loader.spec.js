import { render, screen } from "@testing-library/react";
import Loader from "../loader";
import { TEST_LOADER_ID } from "../../constants";

describe("Loader", () => {
  it("should be rendered", async () => {
    render(<Loader />);
    expect(screen.getByTestId(TEST_LOADER_ID)).toBeInTheDocument();
  });
});
