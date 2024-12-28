import React from 'react';
import './Header.css';
import profilePic from '../assets/images/profile-pic.jpeg'; // Correct relative path

const Header = () => (
  <header className="header">
    <div className="header-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="header-info">
        <h2 className="typewriter name">SRI THARANI R</h2>
        <h3 className="typewriter title">Graduate Engineer</h3>
      </div>

      <div className="hire-me-container">
        <a href="https://drive.google.com/file/d/1sr6-BdpQBegf7HU05tkl0d0DcaX50huT/view?usp=sharing" download className="hire-me-btn">CV download</a>
      </div>

      <div className="quote-container">
        <div className="cloud-container">
          <p className="quote-text">
            "The best way to predict the future is to create it"
            <br />
            <span className="quote-author">- Abraham Lincoln</span>
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
