import React, { useEffect, useState } from 'react';
import logo1 from './image/favicon.png';
import './navbar.css'; // Import file CSS untuk styling Navbar

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 210; // Adjust the navbar height as needed
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <nav className={isSticky ? "navbar navbar-fixed" : "navbar"}>
      <img src={logo1} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => scrollToSection("rayon")}>
          <a href="#">Rayon</a>
        </li>
        <li onClick={() => scrollToSection("About")}>
          <a href="#">Sejarah</a>
        </li>
        <li onClick={() => scrollToSection("Contact")}>
          <a href="#">Media Sosial</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
