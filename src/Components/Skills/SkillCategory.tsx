import { Skill } from "../../data/types";
import { SkillItem } from "./SkillItem";

interface SkillCategoryProps {
    title: string;
    icon?: string;
    skills: Skill[];
    startIndex: number;
}

export const SkillCategory = ({title, icon, skills, startIndex}: SkillCategoryProps) => {

    if (skills.length === 0) return null;

    return (
        <div className="skill-category">
            <h2>{title}</h2>              
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <SkillItem
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={skill.color}
                        icon={skill.icon}
                        index={startIndex + index}
                    />
                ))}
            </div>
        </div>
    )
}