import React from 'react';
import { Navbar, Hero, Projects, About, Contact } from './components';
import './App.css';



const App = () => {


  return (
    <div className='laptop:mt-8 mobile:mt-2 '>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
