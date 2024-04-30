import logo from './logo.svg';
import logo1 from './logo.jpg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;