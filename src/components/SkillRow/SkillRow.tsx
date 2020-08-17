import React, { useState } from "react";
import { Box, Card, Grid, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import {
  skillsInitialValues,
  manageSkillsSchema,
  manageSkillsModel,
} from "../../pages/Skills/Skills.schema";
import InputField from "../../pages/EmployeeForm/Components/InputField";
import CheckboxField from "../../pages/EmployeeForm/Components/CheckboxField";
import { IEmployeeSkill } from "../../models/Skill.interface";

const SkillRow: React.FC<{skillData?: IEmployeeSkill}> = ({skillData}) => {

  const [snapshot, setSnapshot] = useState(skillData || skillsInitialValues);

  const {
    skill,
    proficiency,
    isPrimarySkill,
  } = manageSkillsModel;

  function handleSubmit() {
    // TODO: update when BE piece in place.
    console.log("skill submitted")
  }

  return (
    <Formik
      initialValues={snapshot}
      validationSchema={manageSkillsSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form name="Skill Row">
          <Card>
            <Box p={3}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <InputField name={"skill"} label={skill.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <InputField name={"proficiency"} label={proficiency.label} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <CheckboxField
                    name={"primary skill"}
                    label={isPrimarySkill.label}
                    data={""}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmit()}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default SkillRow;
