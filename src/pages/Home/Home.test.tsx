import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Home";

describe("Employees page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it("renders the home page", () => {
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });
});
