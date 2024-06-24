import './App.css';
import React from 'react';
import Navbar from './navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Rayon from './rayon';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Rayon />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;