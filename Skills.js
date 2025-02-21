import React from 'react';
import './Skills.css';

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Technical Skills</h2>
    <ul className="skills-list">
      <li className="skill-category hover-effect">
        <strong>Programming Languages</strong>
        <span>Python, C</span>
      </li>
      <li className="skill-category hover-effect">
        <strong>Web Technologies</strong>
        <span>UI/UX, HTML, CSS, JavaScript, React.js, Node.js, API integration</span>
      </li>
      <li className="skill-category hover-effect">
        <strong>Database Management</strong>
        <span>MongoDB, MySQL, PostgreSQL</span>
      </li>
      <li className="skill-category hover-effect">
        <strong>Tools</strong>
        <span>Git, VS Code, Power BI, WordPress</span>
      </li>
      <li className="skill-category hover-effect">
        <strong>Automation Tools</strong>
        <span>Python scripting, automation testing</span>
      </li>
    </ul>
  </section>
);

export default Skills;
