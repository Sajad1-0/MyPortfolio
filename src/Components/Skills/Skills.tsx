import { skills } from "../../data/skills";
import { SkillCategory } from "./SkillCategory";
import './Skills.scss'

export const Skills = () => {

    const categories = [
    { key: 'frontend', label: 'Frontend Development', icon: '🎨' },
    { key: 'backend', label: 'Backend Development', icon: '⚙️' },
    { key: 'database', label: 'Database', icon: '🗄️' },
    { key: 'tools', label: 'Tools & Technologies', icon: '🛠️' }
  ];

  // Helper function: filter skills by category
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  }
 
  // CALCULATE: Starting animation index for each category
  let animationIndex = 0;

  return (
    <div id="skills" className="skills-sec">
        <h1>Technical Skills</h1>
        <div className="skills-section">
            {categories.map((category) => {
                // Skills by category
                const categorySkills = getSkillsByCategory(category.key);

                // index
                const currentIndex = animationIndex;

                // increase index by 1
                animationIndex += categorySkills.length;

                return (
                    <SkillCategory
                        key={category.key}
                        title={category.label}
                        icon={category.icon}
                        skills={categorySkills}
                        startIndex={currentIndex}
                    />
                )
            })}
        </div>
    </div>
  )
}