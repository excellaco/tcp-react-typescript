import React, { useState } from "react";
import SkillRow from "../../components/SkillRow/SkillRow";
import { IEmployeeSkill, PROFICIENCY } from "../../models/Skill.interface";
import { reactSkill, javaSkill } from "../../__mocks__/data/skill";

const Skills: React.FC<{ skillsData?: IEmployeeSkill[] }> = ({
  skillsData
}) => {
  const [skills, setSkills] = useState(skillsData || []);

  // TEMP FOR LOCAL TESTING.
  const testSkills: IEmployeeSkill[] = [
    {id: 1, skill: reactSkill, proficiency: PROFICIENCY.HIGH, isPrimarySkill: true},
    {id: 1, skill: javaSkill, proficiency: PROFICIENCY.MID, isPrimarySkill: false}
  ]
  return (
    <div>
      {
        testSkills.length > 1 ? 
        testSkills.map((skill: IEmployeeSkill, index: number) => { return <SkillRow key={index} skillData={skill} />}) : null
      }
      <SkillRow />
    </div>
  )
};

export default Skills;
