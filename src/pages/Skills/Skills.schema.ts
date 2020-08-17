import * as Yup from "yup";

export const manageSkillsModel = {
  skill: {
    name: "skill",
    label: "Skill*",
    requiredErrorMsg: "Skill is required",
    default: "",
  },
  proficiency: {
    name: "proficiency",
    label: "Proficiency*",
    requiredErrorMsg: "Proficiency is required",
    default: "",
  },
  isPrimarySkill: {
    name: "primarySkill",
    label: "Primary Skill",
    default: false,
  },
};

const { skill, proficiency, isPrimarySkill } = manageSkillsModel;

export const manageSkillsSchema = Yup.object({
  skill: Yup.string()
    .required(`${skill.requiredErrorMsg}`)
    .default(skill.default),
  proficiency: Yup.string()
    .required(`${proficiency.requiredErrorMsg}`)
    .default(proficiency.default),
  isPrimarySkill: Yup.boolean().default(isPrimarySkill.default),
}).required();

export type ISkillsForm = Yup.InferType<typeof manageSkillsSchema>;

export const skillsInitialValues: ISkillsForm = manageSkillsSchema.cast();
