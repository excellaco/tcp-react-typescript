import {
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import Skills from "./Skills";
import { IEmployeeSkill, PROFICIENCY } from "../../models/Skill.interface";
import { reactSkill, javaSkill } from "../../__mocks__/data/skill";

const testSkills: IEmployeeSkill[] = [
  {id: 1, skill: reactSkill, proficiency: PROFICIENCY.HIGH, isPrimarySkill: true},
  {id: 1, skill: javaSkill, proficiency: PROFICIENCY.MID, isPrimarySkill: false}
]

describe("Skills page", () => {
  it("renders Skills page correctly given an EMPTY skills data set", () => {
    render(<Skills />);
    expect(screen.getAllByText(/Save/)).toHaveLength(1);
  });
  it("renders Skills page correctly given a POPULATED skills data set", () => {
    render(<Skills skillsData={testSkills} />);
    expect(screen.getAllByText(/Save/)).toHaveLength(3);
  });
});
