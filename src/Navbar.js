import React from 'react';
import logo from './logo.jpg';

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <img src={logo} alt="human" className="logo1" />
      <h1 className='Judul'>ORANG TUA DRINK</h1>
      <ul>
        <li onClick={() => scrollToSection("Home")}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => scrollToSection("Products")}>
          <a href="#">Products</a>
        </li>
        <li onClick={() => scrollToSection("About")}>
          <a href="#">Sejarah</a>
        </li>
        <li onClick={() => scrollToSection("Contact")}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
