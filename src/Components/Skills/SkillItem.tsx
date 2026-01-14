import { useInView } from '../../Hooks/useInView';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
  icon: React.ComponentType;
  index: number;
}

export const SkillItem = ({ name, level, color, icon: Icon, index }: SkillItemProps) => {
  
  const { ref, isInView} = useInView({ threshold: 0.1 })

  

  return (
    <div ref={ref} className="skill-item" style={{ transitionDelay: `${index * 0.1}s`}}>
      <div className="skill-header">
        <div className="skill-info">
          <div className="skill-icon" style={{ color }}>
            <Icon />
          </div>
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-level">{level}%</span>
      </div>
      
      <div className="progress-bar-container">
        <div 
          className={`progress-bar ${isInView ? 'animate' : ''}`}
          style={{ 
            width: isInView ? `${level}%` : '0%',
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};
