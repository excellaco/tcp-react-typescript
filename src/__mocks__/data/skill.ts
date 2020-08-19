import { agileSkillCategory, techSkillCategory } from "./category";

import { ISkill } from "../../models/Skill.interface";

export const scrumMasterSkill: ISkill = {
  id: 0,
  name: "Scrum Master",
  category: agileSkillCategory,
};
export const reactSkill: ISkill = {
  id: 1,
  name: "React",
  category: techSkillCategory,
};
export const javaSkill: ISkill = {
  id: 2,
  name: "Java",
  category: techSkillCategory,
};

export const skills = [scrumMasterSkill, reactSkill, javaSkill];

// Temp, meant to be removed when SelectField supports non-enum data.
export enum SKILLS {
  SCRUM = 'Scrum Master',
  REACT = 'React',
  JAVA = 'Java',
}

export default skills;
