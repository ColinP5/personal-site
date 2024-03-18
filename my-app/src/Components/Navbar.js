import React from 'react';
import './Navbar.css';
import logo from '../Images/ProfessionalHeadshot.jpg'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
    }
  };

  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" height="40px"/>
      </div>
      <ul>
        <li><a onClick={() => scrollToSection('Home')}>Home</a></li>
        <li><a onClick={() => scrollToSection('ReactLogo')}>ReactLogo</a></li>
        <li><a onClick={() => scrollToSection('Skills')}>Skills</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;