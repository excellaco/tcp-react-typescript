import React from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { Box, Card, Grid } from "@material-ui/core";
import { manageSkillsModel } from "./Skills.schema";
import InputField from "../EmployeeForm/Components/InputField";
import { addFormGroup} from "../../helpers/FormGroup";




export const Skills: React.FC<{
  formGroup: string;
}> = ({ formGroup }) => {
  const {
    skill,
    proficiency,
    isPrimarySkill
  } = manageSkillsModel;

  const withFormGroup = addFormGroup(formGroup);
  return (
    <Card>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <InputField
              name={withFormGroup(skill.skill)}
              label={skill.label}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
// create formik jsx with onSubmit, schema and initial values
// field that matches with every field in form object..(bioForm line 32)
  );
};

export default Skills;
