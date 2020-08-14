import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import React from "react";
import SkillsPage from "./Skills";

// import { skillFormModel } from "./Skills.schema";

describe("Skills page", () => {
  // beforeEach(() => {
  //   render(<SkillsPage />);
  // });

  it("renders the skills page", () => {
    expect(screen.getByText(/Skills/)).toBeInTheDocument();
  });

  it("submits user data on submit", () => {
    expect(screen.getByText(/Skills/)).toBeInTheDocument();
    // fireEvent.click(save);
  });
});
