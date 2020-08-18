import { IBaseItem } from './BaseItem.interface'

// Maps Employee to skill, with additional data
export interface IEmployeeSkill extends IBaseItem {
  skill: ISkill
  proficiency: PROFICIENCY
  isPrimarySkill: boolean
}

export interface ISkill extends IBaseItem {
  // Managed by Admin
  name: string
  category: ICategory
}

export function displaySkillFn(skill: ISkill): string | undefined {
  return skill ? `${skill.name} (${skill.category.name})` : undefined
}

export interface ICategory extends IBaseItem {
  // Managed by Admin
  name: string
}

// Basic Enum, not managed by Admin
export enum PROFICIENCY {
  LOW = 'LOW',
  MID = 'MID',
  HIGH = 'HIGH',
}