import React from 'react';
import './pages.css';

export default function Skills() {
    return (
        <div className={'container'}>
            <h2>Specialized Skills</h2>
            <p>Allowing my client's needs to dictate design while keeping responsiveness at the forefront.</p>
            <div className={'skills-container'}>
                <div>
                    <i className="fas fa-brain skill-icon"></i>
                    <h3>Conceptualize</h3>
                    <p className={'skills-desc'}>Planning out user stories and outlining the technical tasks to achieve the project's purpose</p>
                </div>
                <div>
                    <i className="fas fa-code skill-icon"></i>
                    <h3>Development</h3>
                    <p className={'skills-desc'}>Writing functional front-end and back-end code that is testable and effective in its purpose.</p>
                </div>
                <div>
                    <i className="fas fa-tv skill-icon"></i>
                    <h3>Design</h3>
                    <p className={'skills-desc'}>Making the project look as good as it functions</p>
                </div>
                <div>
                    <i className="fas fa-user skill-icon"></i>
                    <h3>UI/UX</h3>
                    <p className={'skills-desc'}>Making the user experience as good as the code that drives it.</p>
                </div>
            </div>
        </div>
    )
}