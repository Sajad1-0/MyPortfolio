import React, { useEffect, useRef, useState } from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
  icon: React.ComponentType;
  index: number;
}

export const SkillItem = ({ name, level, color, icon: Icon, index }: SkillItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [index]);

  return (
    <div ref={skillRef} className="skill-item">
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
          className={`progress-bar ${isVisible ? 'animate' : ''}`}
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};
