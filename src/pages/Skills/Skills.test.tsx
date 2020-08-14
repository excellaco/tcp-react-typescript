import {
  render,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import React from "react";
import SkillsPage from "./Skills";
import { Form } from "formik";

// import { skillFormModel } from "./Skills.schema";

describe("Skills page", () => {
  // beforeEach(() => {
  //   render(<SkillsPage />);
  // });

  it("renders the skills page", () => {
    expect(screen.getByText(/Skills/)).toBeInTheDocument();
  });
});
