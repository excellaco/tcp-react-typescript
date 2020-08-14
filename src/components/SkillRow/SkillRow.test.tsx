import {
    render,
    screen,
    act,
    fireEvent,
  } from "@testing-library/react";
import React from "react";
import SkillRow from "./SkillRow";
import { Formik } from "formik";
  
  describe("Skill Row", () => {
    it("submits user data on submit", () => {
      // Arrange
      const handleSubmit = jest.fn();
      // TODO: figure out how to properly render this
      //   render(<SkillRow><Formik initialValues={defaultValues} onSubmit={handleSubmit} /></SkillRow>);
  
      const skill = screen.getByLabelText(/Angular*/) as HTMLInputElement;
      const proficiency = screen.getByLabelText(/Skill Proficiency*/) as HTMLInputElement;
      const isPrimarySkill = screen.getByLabelText(/Primary Skill/) as HTMLInputElement;
      const saveButton = screen.getByText(/Save/) as HTMLInputElement;
  
      // ACT
      act(() => {
        fireEvent.change(skill, { target: { value: "JavaScript" } });
        fireEvent.change(proficiency, { target: { value: "Advanced" } });
        fireEvent.change(isPrimarySkill, { target: { value: true } });
      });
      fireEvent.click(saveButton);
  
      // ASSERT
      // temp, see TODO above.
      expect(handleSubmit).toHaveBeenCalled();
    });
  });