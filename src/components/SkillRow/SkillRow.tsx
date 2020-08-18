import React, { useState } from "react";
import { Box, Card, Grid, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import {
  manageSkillsSchema,
  manageSkillsModel,
} from "../../pages/Skills/Skills.schema";
import CheckboxField from "../../pages/EmployeeForm/Components/CheckboxField";
import { IEmployeeSkill, PROFICIENCY, ISkill } from "../../models/Skill.interface";
import SelectField from "../../pages/EmployeeForm/Components/SelectField";
import skills, { SKILLS } from "../../__mocks__/data/skill";
import { useUserState } from "../../context/UserContext/UserContext";

const SkillRow: React.FC<{skillData?: IEmployeeSkill}> = ({skillData}) => {

  const { employeeInfo } = useUserState();
  const [snapshot, setSnapshot] = useState(skillData);

  const {
    skill,
    proficiency,
    isPrimarySkill,
  } = manageSkillsModel;

  function saveSkill() {
    // TODO: update when BE piece in place.
    // const existingSkill: ISkill = skills.filter(skill => { return skill.name === values.skill.name})
    // const skill = {
    //   // id: existingSkill.id,
    //   skill: existingSkill,
    //   proficiency: values.proficiency,
    //   isPrimarySkill: values.isPrimarySkill,
    // } as IEmployeeSkill
    // addSkill(employeeInfo, skill);
    console.log("skill submitted")
  }

  function transformSnapshot(skill?: IEmployeeSkill) {
    return {
      skill: skill?.skill?.name.toUpperCase().replace(' ', '_'),
      proficiency: skill?.proficiency,
      isPrimarySkill: skill?.isPrimarySkill
    }
  }

  return (
    <Formik
      initialValues={transformSnapshot(snapshot)}
      validationSchema={manageSkillsSchema}
      onSubmit={saveSkill}
    >
      {(formik) => (
        <Form>
          <Card>
            <Box p={3}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <SelectField
                    name={skill.name}
                    label={skill.label}
                    data={SKILLS}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <SelectField
                    name={proficiency.name}
                    label={proficiency.label}
                    data={PROFICIENCY}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <CheckboxField
                    name={isPrimarySkill.name}
                    label={isPrimarySkill.label}
                    checked={formik.values.isPrimarySkill}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => saveSkill()}
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
