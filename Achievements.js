import React from 'react';
import './Achievements.css'; // Ensure you create and add this CSS file

const Achievements = () => (
  <section id="achievements" className="achievements">
    <div className="achievements-container">
      <h2>Achievements</h2>
      <div className="achievement-card">
        <p><strong>Awarded a medal for teamwork and strategy in throwball at college sports events.</strong></p>
      </div>
      <div className="achievement-card">
        <p><strong>Consistently ranked in the top 10% of the class for academic performance.</strong></p>
      </div>
    </div>
  </section>
);

export default Achievements;
