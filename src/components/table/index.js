import React from "react";
import "./table.css";
import { TEST_TABLE_ID } from "../../constants";

/**
 * Table Component
 * @param {Array<{ label: string, name: string }>} fields table header name vs data props
 * @param {Array} data array of object which props are fields.name
 * @returns React Element
 */
export default function Table({ fields, data }) {
  return (
    <table className="table" data-testid={TEST_TABLE_ID}>
      <thead>
        <tr>
          <th>No.</th>
          {fields.map(({ label }) => (
            <th key={label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            {fields.map(({ field }) => (
              <td key={`${row.id}-${field}`}>{row[field] || ""}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
