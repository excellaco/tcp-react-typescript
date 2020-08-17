import React, { useState } from "react";
import SkillRow from "../../components/SkillRow/SkillRow";
import { IEmployeeSkill } from "../../models/Skill.interface";

const Skills: React.FC<{ skillsData?: IEmployeeSkill[] }> = ({
  skillsData
}) => {
  const [skills, setSkills] = useState(skillsData || []);
  return (
    <div>
      {
        skills.length > 1 ? 
          skills.map((skill: IEmployeeSkill, index: number) => { return <SkillRow key={index} skillData={skill} />}) : null
      }
      <SkillRow />
    </div>
  )
};

export default Skills;
