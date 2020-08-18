import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import SkillsForm from "./SkillsForm";
import { Formik } from "formik";
import { ValidationError } from "yup";
import {
  skillsFormInitialValues,
  skillsFormSchema,
  IEmployeeSkillForm,
} from "./SkillsForm.schema";
import { PROFICIENCY } from "../../../models/Skill.interface";

describe("SkillsForm", () => {
  function mockSubmit(values: IEmployeeSkillForm) {
    jest.fn;
  }

  beforeEach(() => {
    render(
      <Formik
        initialValues={skillsFormInitialValues}
        validationSchema={skillsFormSchema}
        onSubmit={mockSubmit}
      >
        {(formik) => (
          <form data-testid="form">
            <SkillsForm formGroup="skills" />;
          </form>
        )}
      </Formik>
    );
  });

  it("renders skills form fields", () => {
    expect(screen.getByLabelText("Skill*")).toBeInTheDocument();
    expect(screen.getByText("Proficiency*")).toBeInTheDocument();
    expect(screen.getByText("Primary Skill")).toBeInTheDocument();
  });

  it("validates contact object with required fields", async () => {
    const testInfo = [
      {
        skill: 'test skill',
        proficiency: PROFICIENCY.HIGH,
        isPrimarySkill: false
      }
    ];

    await expect(skillsFormSchema.validate(testInfo)).resolves;
  });

  it("throws validation error when skill is missing", async () => {
    const testInfo = [
      {
        skill: '',
        proficiency: PROFICIENCY.HIGH,
        isPrimarySkill: false
      }
    ];

    expect.assertions(1);
    await expect(skillsFormSchema.validate(testInfo)).rejects.toEqual(
      new ValidationError("Skill is required", "", "")
    );
  });

  it("throws validation error when proficiency is missing", async () => {
    const testInfo = [
      {
        skill: 'test skill',
        proficiency: '',
        isPrimarySkill: false
      }
    ];

    expect.assertions(1);
    await expect(skillsFormSchema.validate(testInfo)).rejects.toEqual(
      new ValidationError("Proficiency is required", "", "")
    );
  });

  it("validates multiple skill objects", async () => {
    const testInfo = [
      {
        skill: 'test skill',
        proficiency: PROFICIENCY.HIGH,
        isPrimarySkill: false
      },
      {
        skill: 'test skill 2' ,
        proficiency: PROFICIENCY.MID,
        isPrimarySkill: true
      },
    ];

    await expect(skillsFormSchema.validate(testInfo)).resolves;
  });

  it("throws validation error when second skill is missing", async () => {
    const testInfo = [
      {
        skill: 'test skill',
        proficiency: PROFICIENCY.MID,
        isPrimarySkill: false
      },
      {
        skill: '',
        proficiency: PROFICIENCY.HIGH,
        isPrimarySkill: false
      }
    ];

    expect.assertions(1);
    await expect(skillsFormSchema.validate(testInfo)).rejects.toEqual(
      new ValidationError("Skill is required", "", "")
    );
  });
});
