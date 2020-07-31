import { render, screen } from "@testing-library/react";

import EmployeesPage from "./Employees";
import React from "react";

describe("Employees page", () => {
  beforeEach(() => {
    render(<EmployeesPage />);
  });

  it("renders the employees table", () => {
    // Look for Table Column Headers
    expect(screen.getByText("Employee Name")).toBeInTheDocument();
    expect(screen.getByText("Employee Email")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
});
