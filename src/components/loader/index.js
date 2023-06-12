import React from "react";
import "./loader.css";
import { TEST_LOADER_ID } from "../../constants";

export default function Loader() {
  return <div data-testid={TEST_LOADER_ID} className="spinner" />;
}
