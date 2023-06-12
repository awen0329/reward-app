import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorBoundary from "../errorBoundary";
import { MSG_ERROR, TEST_ERROR_BOUNDARY_BACK_BUTTON } from "../../constants";

const MockComponentThatThrowsError = () => {
  throw new Error("Mock error");
};

describe("should render an error message when an error occurs", () => {
  it("should render error message", async () => {
    const { getByText } = render(
      <ErrorBoundary>
        <MockComponentThatThrowsError />
      </ErrorBoundary>
    );

    const element = getByText(MSG_ERROR);
    expect(element).toBeInTheDocument();
  });

  it("can click back button", async () => {
    render(
      <ErrorBoundary>
        <MockComponentThatThrowsError />
      </ErrorBoundary>
    );

    const btn = screen.getByTestId(TEST_ERROR_BOUNDARY_BACK_BUTTON);
    await userEvent.click(btn);
  });
});
