import React from "react";
import { Box, Card, Grid } from "@material-ui/core";
import {
  manageSkillsModel,
  skillsInitialValues,
  manageSkillsSchema,
} from "./Skills.schema";
import InputField from "../EmployeeForm/Components/InputField";
import { addFormGroup } from "../../helpers/FormGroup";
import { Formik, Field, Form, FormikHelpers } from "formik";
import SkillRow from "../../components/SkillRow/SkillRow";

export const Skills: React.FC<{
  formGroup: string;
}> = ({ formGroup }) => {
  // const {
  //   skill,
  //   // proficiency,
  //   // isPrimarySkill
  // } = manageSkillsModel;

  // const withFormGroup = addFormGroup(formGroup);
  return <SkillRow />;
};

export default Skills;
