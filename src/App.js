import React from 'react';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
