import React from "react";
import { Box, Card, Grid, Button } from "@material-ui/core";

import { addFormGroup } from "../../helpers/FormGroup";
import { Formik, Field, Form, FormikHelpers } from "formik";
import {
  manageSkillsModel,
  skillsInitialValues,
  manageSkillsSchema,
} from "../../pages/Skills/Skills.schema";
import InputField from "../../pages/EmployeeForm/Components/InputField";
import RadioButtonField from "../../pages/EmployeeForm/Components/RadioButtonField";
import CheckboxField from "../../pages/EmployeeForm/Components/CheckboxField";

const SkillRow: React.FC<{}> = () => {
  const { skill, proficiency, isPrimarySkill } = manageSkillsModel;

  return (
    <Formik
      initialValues={skillsInitialValues}
      validationSchema={manageSkillsSchema}
      onSubmit={() => {}}
    >
      {(formik) => (
        <Form>
          <Card>
            <Box p={3}>
              <Grid container spacing={3}>
                <Grid item lg={4} md={4} xs={12} sm={5}>
                  <InputField name={"skill"} label={skill.label} fullWidth />
                </Grid>
                <Grid item lg={4} md={4} xs={12} sm={5}>
                  <InputField name={"proficiency"} label={proficiency.label} />
                </Grid>
                <Grid item lg={4} md={4} xs={12} sm={5}>
                  <CheckboxField
                    name={"primary skill"}
                    label={isPrimarySkill.label}
                    data={""}
                  />
                </Grid>
                <Button>Save</Button>
              </Grid>
            </Box>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default SkillRow;
