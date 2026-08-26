import React, { useState } from 'react'
import { WorkExperiences } from '../../data/workExperience';
import { WorkExperience } from '../../data/types';
import './Workexperience.scss';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';



export const Workexperience = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleToggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    }

    const formData = (data: Date | undefined): string => {
        if (!data) return 'Present';
        return data.toLocaleDateString('en-US', {year: 'numeric', month: 'short'})
    }

    const formatDateLine = (work: WorkExperience): string => {
        const range = work.dateLabel ?? `${formData(work.startTime)} - ${formData(work.endTime)}`;
        return work.location ? `${range} · ${work.location}` : range;
    }

    return (
        <div id='workexperience' className='work-experience'>
            <h1>Work Experience</h1>
                {WorkExperiences.map((work) => {

                    // check if this specific work experience is expanded
                    const isExpanded = expandedId === work.id;
                    return (
                        <div key={work.id} className='work-card'>
                            {work.image && (
                                <div className='work-card-left'>
                                    <img src={work.image} alt={work.title} loading='lazy' />
                                </div>
                            )}
                            <div className='work-card-right'>
                                <h1>{work.title}</h1>
                                <h2>{work.role}</h2>
                                <h4>{formatDateLine(work)}</h4>

                                {/** Description with expand/collapse */}
                                <p className={isExpanded ? 'description expanded' : 'description'}>
                                    {work.description}
                                </p>
                                
                                {/* Expand / Collapse button */ }
                                <button 
                                    className='expand-button'
                                    onClick={() => handleToggleExpand(work.id)}
                                    aria-label={isExpanded ? 'show less' : 'show more'}
                                >
                                    {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                                </button>
                                <div className='tech'>
                                    <h2>Tech:</h2>
                                    <ul>
                                        {work.tech?.frontend && work.tech.frontend.length > 0 && (
                                            <li>
                                                Frontend: {work.tech.frontend.map((tech, index) => {
                                                    const FrontendIcon = tech.icon;
                                                    return (
                                                        <span key={index} className={`tech-icon tech-${tech.name}`}>
                                                            <FrontendIcon />
                                                        </span>   
                                                    );
                                                })}
                                            </li>
                                        )}
                                        
                                        {work.tech?.backend && work.tech.backend.length > 0 && (
                                            <li>
                                                Backend: {work.tech.backend.map((tech, index) => {
                                                    const BackendIcon = tech.icon;
                                                    return (
                                                        <span key={index} className={`tech-icon tech-${tech.name}`}>
                                                            <BackendIcon />
                                                        </span>
                                                    );
                                                })}
                                            </li>
                                        )}
                                        
                                        {work.tech?.tools && work.tech.tools.length > 0 && (
                                            <li>
                                                Tools: {work.tech.tools.map((tech, index) => {
                                                    const ToolsIcon = tech.icon;
                                                    return (
                                                        <span key={index} className={`tech-icon tech-${tech.name}`}>
                                                            <ToolsIcon />
                                                        </span>
                                                    );
                                                })}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}