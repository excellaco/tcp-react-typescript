import * as Yup from "yup";
import moment from "moment";

export const manageSkillsModel = {
  skill: {
    skill: "angular",
    label: "Angular*",
    requiredErrorMsg: "Skill is required",
    default: "",
  },
  proficiency: {
    name: "proficiency",
    label: "Skill Proficiency*",
    requiredErrorMsg: "Proficiency is required",
    default: "",
  },
  isPrimarySkill: {
    name: "primarySkill",
    label: "Primary Skill*",
    // requiredErrorMsg: "Primary skill is required",
    default: "",
  },
};

const {
    skill,
    proficiency,
    isPrimarySkill,
} = manageSkillsModel;

export const manageSkillsSchema = Yup.object({
  skill: Yup.string()
    .required(`${skill.requiredErrorMsg}`)
    .default(skill.default),
    proficiency: Yup.string().default(proficiency.default),
  lastName: Yup.string()
    .default(isPrimarySkill.default),
    isPrimarySkill: Yup.boolean().default(isPrimarySkill.default),
}).required();

export type IEmployeeBioForm = Yup.InferType<typeof manageSkillsSchema>;

export const bioFormInitialValues: IEmployeeBioForm = manageSkillsSchema.cast();
