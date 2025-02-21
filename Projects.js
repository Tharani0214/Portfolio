import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    
    {/* React JS Projects */}
    <div className="project-category">
      
      <div className="project-grid">
        <a
          href="https://github.com/Tharani0214/expense-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-card-content">
            <h4>Expense Tracker</h4>
            <h5>A React app to track expenses and manage budgets efficiently.</h5>
          </div>
        </a>
        <a
          href="https://github.com/Tharani0214/todo"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-card-content">
            <h4>Todo List</h4>
            <h5>A simple React-based todo list app for task management.</h5>
          </div>
        </a>
        <a
          href="https://github.com/Tharani0214/weather"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-card-content">
            <h4>Weather Prediction</h4>
            <h5>Get weather updates using React and a weather API.</h5>
          </div>
        </a>
      </div>
    </div>


  </section>
);

export default Projects;
