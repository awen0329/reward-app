import { calculator } from "../calculator";
import { getTableFields, transformData } from "../tableUtils";

describe("Test table utils file", () => {
  it("getTableFields function test", async () => {
    const fields = getTableFields("2023", [4, 5, 6]);
    expect(JSON.stringify(fields)).toBe(
      JSON.stringify([
        { label: "Name", field: "name" },
        { label: `2023 - 4`, field: 4 },
        { label: `2023 - 5`, field: 5 },
        { label: `2023 - 6`, field: 6 },
        { label: "Total", field: "total" },
      ])
    );
  });

  it("transformData function test", async () => {
    const mockData = [
      {
        id: "14be5dc7-e97d-4e43-804a-2e432f18049c",
        name: "Joy Bauer",
        transactions: [
          {
            purchase_date: "2023-05-06T07:03:43",
            price: 3300,
          },
        ],
      },
      {
        id: "y8be5dc7-e97d-4e43-804a-24jkliwu89p0",
        name: "Alex Romanov",
        transactions: [
          {
            purchase_date: "2023-05-06T07:03:43",
            price: 16000,
          },
        ],
      },
    ];
    const transformedData = transformData(mockData);
    expect(transformedData[0]["5"]).toBeCloseTo(calculator(3300));
    expect(transformedData[1]["5"]).toBeCloseTo(calculator(16000));
  });
});
