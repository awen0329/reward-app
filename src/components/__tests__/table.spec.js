import { render, screen } from "@testing-library/react";
import Table from "../table";
import { TEST_TABLE_ID } from "../../constants";

describe("Table", () => {
  beforeEach(() => {
    render(
      <Table
        fields={[{ label: "name", field: "Name" }]}
        data={[{ id: 1, name: "abc" }]}
      />
    );
  });

  it("should render table", async () => {
    expect(screen.getByTestId(TEST_TABLE_ID)).toBeInTheDocument();
  });
});
