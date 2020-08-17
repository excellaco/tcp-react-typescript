import {
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import Skills from "./Skills";

describe("Skills page", () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it("renders the skills page", () => {
    expect(screen.getByText(/Skills/)).toBeInTheDocument();
  });
});
